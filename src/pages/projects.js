import React from 'react'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout pageTitle="Projects">
      <ul>
        {
          projects.map(({ node }, i) => (
            <Fade bottom duration={1000} delay={i * 500} distance="30px" >
              <li key={node.frontmatter.title}>
                {node.frontmatter.title}
                {node.frontmatter.tech}
                {node.frontmatter.company}
                {node.frontmatter.github}
                {node.frontmatter.url}
                {node.frontmatter.date}
                {node.excerpt}
              </li>
            </Fade>
          ))
        }
      </ul>
    </Layout>    
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/projects/"} }
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

export default ProjectsPage