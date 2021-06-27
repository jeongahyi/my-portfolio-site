import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: auto;
  bottom: 0;
  padding: 35px;
  position: relative;
  border-width: 0;
  border-style: solid;
  border-color: #424242;
  border-top-width: 1px;
  color: #7e7e7e;
  a {
    color: #ffc391;
    &:hover {
      color: gray;
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          url
        }
      }
    }
  `)
  const { title, url } = data.site.siteMetadata;
  return (
    <StyledFooter>
      <span>
        Bulit by&nbsp;
        <a href={url}>{title}</a>
      </span>
    </StyledFooter>
  )
}

export default Footer