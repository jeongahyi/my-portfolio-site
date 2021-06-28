import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .site-title {
    margin: 15px;
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.orangeColor};
    &:hover {
      color: ${props => props.theme.grayColor};
    }
  }
`

const StyledNav = styled.nav`
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
        color: ${props => props.theme.grayColor};
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
      <Link to="/" >
        <p className="site-title">
          {data.site.siteMetadata.title}
        </p>
      </Link>
      <StyledNav>
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
      </StyledNav>
    </StyledHeader>
  )
}

export default Header