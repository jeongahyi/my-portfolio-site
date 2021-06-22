import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const StyledIntro = styled.p`
  font-size: 4em;
  font-weight: bold;
  color: rebeccapurple;
  margin: 5px;
`

const IndexPage = () => {
  return (
    <Layout pageTitle="Landing Page">
      <Fade left duration={1000} distance="30px">
        <StyledIntro>
          Hi, my name is Yi
        </StyledIntro>
      </Fade>
      <Fade left duration={1000} delay={250} distance="30px">
        <StyledIntro>
          I build user experiences for products and services.
        </StyledIntro>
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