import React from 'react'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import Experience from '../components/experience'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Fade bottom>
        <p>Thanks for visiting my SECOND portfolio, which I am still working on! :D</p>
      </Fade>
      <Experience />
    </Layout>
  )
}

export default AboutPage