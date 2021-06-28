import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin-top: auto;
  padding: 35px;
  border-width: 0;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.darkGrayColor};
  color: ${props => props.theme.lightGrayColor};
  a {
    color: ${props => props.theme.orangeColor};
    &:hover {
      color: ${props => props.theme.grayColor};
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