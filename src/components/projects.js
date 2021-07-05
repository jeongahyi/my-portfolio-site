import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import GithubIcon from './icons/githubIcon'
import LinkIcon from './icons/linkIcon'

const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .project-content {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    width: 280px;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
    background-color: ${props => props.theme.darkGrayColor};
    h3 {
      color: ${props => props.theme.orangeColor};
    }
    a {
      color: ${props => props.theme.redColor};
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      color: ${props => props.theme.lightGrayColor};
      li {
        margin: 0px 10px 5px 0px;
        &:focus,
        &:hover {
          color: ${props => props.theme.orangeColor};
        }
      }
    }
    &:hover,
    &:focus {
      transform: scale(1.01);
    }
  }
`
const StyledIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  a {
    padding-right: 15px;
    fill: ${props => props.theme.redColor};
    stroke: ${props => props.theme.redColor};
    &:focus,
    &:hover {
      fill: ${props => props.theme.pinkColor};
      stroke: ${props => props.theme.pinkColor};
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex: "/projects/"} }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              company
              github
              url
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges
  return (
    <StyledProjects>
      {
        projects.map(({ node }) => (
          <div
            key={node.frontmatter.title}
            className="project-content"
          >
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <ul>
                {node.frontmatter.tech.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
            <StyledIcons>
              <a href={node.frontmatter.github}>
                <GithubIcon />
              </a>
              <a href={node.frontmatter.url}>
                <LinkIcon />
              </a>
            </StyledIcons>
          </div>
        ))
      }
    </StyledProjects>
  )
}

export default Projects