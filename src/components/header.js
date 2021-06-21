import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
    <header className="nav-container">
      <Link to="/" >
        <p className="site-title">
          {data.site.siteMetadata.title}
        </p>
      </Link>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header