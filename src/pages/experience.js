import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Layout from '../components/layout';

const ExperiencePage = ({ data }) => {
  const jobs = data.allMarkdownRemark.edges
  return (
    <Layout pageTitle="Experience">
      <div>
      {
        jobs.map(({ node }, i) => (
          <div key={node.frontmatter.company}>
            <div className="flex-wrapper">
              <Fade 
                bottom
                duration={1000}
                delay={i * 200}
                distance="30px"
              >
                <h3>{node.frontmatter.title}&nbsp;</h3>
                <a href={node.frontmatter.url}>@{node.frontmatter.company}</a>
              </Fade>
            </div>
            <div className="flex-wrapper">
              <Fade 
                bottom
                duration={1100}
                delay={i * 200 + 100}
                distance="30px"
              >
                <span>{node.frontmatter.range}&nbsp;</span>
                <span>{node.frontmatter.type}</span>
              </Fade>
            </div>
            <div>
              <Fade
                bottom
                duration={1200}
                delay={i * 200 + 200}
                distance="30px"
              >
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </Fade>
            </div>
            <div className="flex-wrapper">
              <Fade
                bottom
                duration={1200}
                delay={i * 200 + 300}
                distance="30px"
              >
                <ul>
                  {node.frontmatter.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <ul>
                  {node.frontmatter.task.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
                <ul>
                  {node.frontmatter.dispatch && node.frontmatter.dispatch.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
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
      filter: { fileAbsolutePath: {regex: "/jobs/"} }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            type
            company
            range
            url
            task
            tech
            dispatch
          }
          html
        }
      }
    }
  }
`

ExperiencePage.propTypes = {
  data: PropTypes.object,
}

export default ExperiencePage