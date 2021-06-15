// Step 1: Import React
import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Landing Page">
      <p>This is the landing page.</p>
      <StaticImage
        alt="This is me"
        src="../images/austria1.jpg"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage