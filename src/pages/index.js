import React from 'react'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Landing Page">
      <Fade left duration={1000} distance="30px">
        <h1>
          Hi, my name is Yi
          <br />
          I build user experiences for products and services.
        </h1>
      </Fade>
      <Fade left duration={1000} delay={500} distance="30px">
        <StaticImage
          alt="This is austria"
          src="../images/austria1.jpg"
        />
      </Fade>
    </Layout>
  )
}

export default IndexPage