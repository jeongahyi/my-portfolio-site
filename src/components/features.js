import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Styledfeatures = styled.div`
  display: grid;
  color: #7e7e7e;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 100px;
  .feature-content {
    z-index: 2;
    grid-area: 1 / 1 / -1 / 7;
    p {
      position: relative;
      z-index: 2;
      padding: 25px;
      color: #584e45;
      background-color: #ffc391;
      border-radius: 10px;
    }
    ul {
      list-style: none;
      display: flex;
      padding: 0;
      li {
        margin: 0px 20px 5px 0px;
      }
    }
    a {
      color: #b45f5c;
    }
  }
  .feature-image {
    z-index: 1;
    grid-area: 1 / 5 / -1 / -1;
  }
` 

const features = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/projects/" }, 
          frontmatter: { featured: { eq: true } }
        }
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
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)
  const features = data.allMarkdownRemark.edges
  return (
    <div>
      {
        features.map(({ node }) => {
          const image = getImage(node.frontmatter.image)
          console.log(image)
          return (<Styledfeatures key={node.frontmatter.title}>
            <div className="feature-content">
              <Fade
                bottom 
                duration={1000}
                delay={100}
                distance="30px"
              >
                <div>
                  <h1>{node.frontmatter.title}</h1>
                  <p>{node.excerpt}</p>
                  <ul>
                    {node.frontmatter.tech.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                  <div>
                    <a href={node.frontmatter.github}>github</a>
                    <br />
                    <a href={node.frontmatter.url}>website</a>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="feature-image">
              <Fade
                bottom 
                duration={1400}
                delay={200}
                distance="30px"
              >
                <a href={node.frontmatter.url}>
                  <GatsbyImage
                    image={image}
                    alt={node.frontmatter.title}
                  />
                </a>
              </Fade>
            </div>
          </Styledfeatures>)
        })
      }
    </div> 
  )
}

export default features