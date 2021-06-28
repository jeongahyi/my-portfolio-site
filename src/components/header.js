import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  .site-title {
    color: ${props => props.theme.redColor};
    p {
      margin: 15px;
      font-size: 2.5rem;
      font-weight: 700;
      color: ${props => props.theme.orangeColor};
      &:hover {
        color: ${props => props.theme.grayColor};
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li {
      padding-right: 2rem;
      a {
        text-decoration: none;
        padding: 10px;
        border-radius: 70px;
        color: ${props => props.page? props.theme.orangeColor : props.theme.grayColor};
        &:hover,
        &:focus {
          color: ${props => props.theme.orangeColor};
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Link to="/" className="site-title">
        <p>
          {data.site.siteMetadata.title}
        </p>
      </Link>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header