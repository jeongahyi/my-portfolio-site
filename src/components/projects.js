import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .project-content {
    width: 300px;
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projects {
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
  `)
  const projects = data.allMarkdownRemark.edges
  return (
    <StyledProjects>
      {
        projects.map(({ node }) => (
          <div
            key={node.frontmatter.title}
            className="project-content"
          >
            <h3>{node.frontmatter.title}</h3>
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
        ))
      }
    </StyledProjects>
  )
}

export default Projects