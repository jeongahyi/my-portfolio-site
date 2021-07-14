import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

const StyledExperience = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  padding-top: 20px;
  padding-bottom: 100px;
`

const StyledTabs = styled.div`
  float: left;
`

const StyledTabButton = styled.button`
  width: 400px;
  padding: 15px 10px;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1em;
  font-weight: 200;
  color: ${props => props.theme.lightGrayColor};
  background-color: inherit;
  border-left: 5px solid ${props => props.theme.darkGrayColor};
  &:hover,
  &:focus {
    color: ${props => props.theme.orangeColor};
    background-color: ${props => props.theme.darkGrayColor};
    border-left: 5px solid ${props => props.theme.orangeColor}
  }
  h3 {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
`

const StyledTabPanels = styled.div`

`

const StyledTabPanel = styled.div`
  padding: 20px;
  top: 0;
  color: ${props => props.theme.lightGrayColor};
  ul {
    list-style: none;
    padding: 0;
  }
`

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex: "/jobs/"} }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              type
              company
              range
              url
              task
              tech
              dispatch
            }
            html
          }
        }
      }
    }
  `)
  const jobs = data.allMarkdownRemark.edges
  const [activeTab, setActiveTab] = useState(0)
  return (
    <StyledExperience>
      <StyledTabs>
        <Fade
          bottom
          duration={1000}
          delay={100}
          distance="30px"
        >
          {jobs.map(({ node }, i) => (
            <StyledTabButton
              key={i}
              onClick={() => setActiveTab(i)}
              id={i}
            >
              <h3>{node.frontmatter.title}</h3>
              <h4>@{node.frontmatter.company}</h4>
              <br />
              <h5>{node.frontmatter.range}, {node.frontmatter.type}</h5>
              </StyledTabButton>
          ))}
        </Fade>
      </StyledTabs>
      <StyledTabPanels>
        <Fade
          bottom
          duration={1000}
          delay={300}
          distance="30px"
        >
          {jobs.map(({ node }, i) => (
            <StyledTabPanel
              key={node.frontmatter.company}
              hidden={activeTab !== i}
            >
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              {/* <div>
                <ul>
                  {node.frontmatter.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <ul>
                  {node.frontmatter.task.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
                <ul>
                  {node.frontmatter.dispatch && node.frontmatter.dispatch.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div> */}
            </StyledTabPanel>
          ))}
        </Fade>
      </StyledTabPanels>
    </StyledExperience>
  )
}

export default Experience