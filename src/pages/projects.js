import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout pageTitle="Projects">
      <div>
        {
          projects.map(({ node }, i) => (
            <div 
              className="project-wrapper"
              key={node.frontmatter.title}
            >
              <div className="project-content">
                <Fade
                  bottom 
                  duration={1000}
                  delay={i * 500}
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
                  delay={i * 500 + 400}
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
            </div>
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