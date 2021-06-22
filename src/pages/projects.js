import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 100px;
  .project-content {
    z-index: 2;
    grid-area: 1 / 1 / -1 / 7;
    p {
      position: relative;
      z-index: 2;
      padding: 25px;
      background-color: #551b8b;
      color: aquamarine;
    }
    ul {
      list-style: none;
      display: flex;
      padding: 0;
      li {
        margin: 0px 20px 5px 0px;
      }
    }
  }
  .project-image {
    z-index: 1;
    grid-area: 1 / 5 / -1 / -1;
  }
` 

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout pageTitle="Projects">
      <div>
        {
          projects.map(({ node }) => (
            <StyledProjects key={node.frontmatter.title}>
              <div className="project-content">
                <Fade
                  bottom 
                  duration={1000}
                  delay={100}
                  distance="30px"
                >
                  <div>
                    <h1>{node.frontmatter.title}</h1>
                    <p>{node.excerpt}</p>
                    <ul>
                      {node.frontmatter.tech.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                    <div>
                      <a href={node.frontmatter.github}>github</a>
                      <br />
                      <a href={node.frontmatter.url}>website</a>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="project-image">
                <Fade
                  bottom 
                  duration={1400}
                  delay={200}
                  distance="30px"
                >
                  <a href={node.frontmatter.url}>
                    <StaticImage
                      alt={node.frontmatter.title}
                      src="../images/austria1.jpg"
                    />
                  </a>
                </Fade>
              </div>
            </StyledProjects>
          ))
        }
      </div>
    </Layout>    
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/projects/"} }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            company
            github
            url
            date
          }
          excerpt
        }
      }
    }
  }
`

ProjectsPage.propTypes = {
  data: PropTypes.object,
}

export default ProjectsPage