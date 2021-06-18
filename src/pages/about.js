import React from 'react'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Fade bottom>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby :D</p>
      </Fade>
    </Layout>
  )
}

export default AboutPage