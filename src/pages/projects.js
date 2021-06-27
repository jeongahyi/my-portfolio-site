import React from 'react'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import Features from '../components/features'
import Projects from '../components/projects'

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Fade bottom distance="30px">
        <h2>Featured Projects</h2>
        <Features />
      </Fade>
      <Fade bottom delay={100} distance="30px">
        <h2>Projects</h2>
        <Projects />
      </Fade>
    </Layout>    
  )
}

export default ProjectsPage