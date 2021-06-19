import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ExperiencePage = ({ data }) => {
  const jobs = data.allMarkdownRemark.edges
  return (
    <Layout pageTitle="Experience">
      <ul>
        {
          jobs.map(({ node }, i) => (
            <Fade bottom duration={1000} delay={i * 500} distance="30px"
              key={node.frontmatter.company}>
              <li>
                {node.frontmatter.title}
                {node.frontmatter.type}
                {node.frontmatter.company}
                {node.frontmatter.location}
                {node.frontmatter.range}
                {node.frontmatter.url}
                {node.frontmatter.date}
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
      filter: { fileAbsolutePath: {regex: "/jobs/"} }
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            company
            location
            range
            url
            date
          }
        }
      }
    }
  }
`

ExperiencePage.propTypes = {
  data: PropTypes.object,
}

export default ExperiencePage