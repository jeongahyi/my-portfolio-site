import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const StyledIndex = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  p {
    padding: 5px;
    margin: 5px;
    font-size: 3.5em;
    font-weight: bold;
    color: ${props => props.theme.orangeColor};
  }
  .sentence {
    font-size: 1.5em;
    font-weight: 200;
  }
  .name {
    color: ${props => props.theme.whiteColor};
  }
  .highlight {
    color: ${props => props.theme.lightGrayColor};
  }
  .sentence {
    max-width: 600px;
    font-size: 1.5em;
    font-weight: 200;
  }
  .link {
    color: ${props => props.theme.redColor};
  }
`

const IndexPage = () => {
  return (
    <Layout pageTitle="Landing Page">
      <StyledIndex>
        <Fade left duration={1000} distance="30px">
          <p className="sentence">Hi, my name is</p>
        </Fade>
        <Fade left duration={1000} delay={150} distance="30px">
          <p className="name">Jeongah Yi.</p>
        </Fade>
        <Fade left duration={1000} delay={250} distance="30px">
          <p className="highlight">
            I build user experiences
            <br />
            for products and services.
          </p>
        </Fade>
        <Fade left duration={1000} delay={350} distance="30px">
          <p className="sentence">
            I'm a software engineer with over 4 years of professional experience for both server-side and client-side.
            <br />
            Currently, I'm designing and building several web applications. 
            <Link to="/projects" className="link">
              view the projects
            </Link>
          </p>
        </Fade>
      </StyledIndex>
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