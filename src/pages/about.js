import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import Experience from '../components/experience'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  p {
    max-width: 600px;
    font-size: 1.5em;
    font-weight: 200;
  }
  padding-bottom: 100px;
  img {
    width: 300px;
  }
`

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Fade bottom duration={1000} distance="30px">
        <h2>About me</h2>
        <StyledAbout>
          <div>
            <p>
              Thanks for visiting my SECOND portfolio, which I am still working on! :D
              <br />
              Open-minded to cultural diversity and easily adapts to new environments, with adventurous and outgoing personality
              <br />
              4+ years of professional working experience as a web application developer for both server-side and client-side
              <br />
              Experience with Agile developments with ability to perform following : TypeScript, ES6+, React, Angular, HTML5, CSS, Java
            </p>
          </div>
          <StaticImage
            alt="This is austira 3"
            src="../images/austria3.jpg"
          />
        </StyledAbout>
      </Fade>
      <Fade bottom duration={1000} delay={150} distance="30px">
        <h2>Where I have worked</h2>
        <Experience />
      </Fade>
    </Layout>
  )
}

export default AboutPage