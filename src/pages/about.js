import React from 'react'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import Experience from '../components/experience'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Fade bottom>
        <h2>Who am I?</h2>
        <p>Thanks for visiting my SECOND portfolio, which I am still working on! :D</p>
      </Fade>
      <Fade bottom distance="30px">
        <h2>Where have you been?</h2>
        <Experience />
      </Fade>
    </Layout>
  )
}

export default AboutPage