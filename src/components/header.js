import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  .site-title {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 15px;
    &:hover {
        color:#551b8b;
    }
  }
`

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    li {
      padding-right: 2rem;
      a {
        &:hover {
          color: gray;
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