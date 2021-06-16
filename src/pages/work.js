import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const WorkPage = ({ data }) => {
  return (
    <Layout pageTitle="My Project">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
      <p>My cool work will go in here</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default WorkPage