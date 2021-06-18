import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ThemeContext from '../context/ThemeContext'

const Layout = ({ pageTitle, children }) => {
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
    <ThemeContext.Consumer>
    {theme => ( <div className={theme.dark? "dark" : "light" }>
    <main className="container">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className="title-switch-container">
        <p className="site-title">{data.site.siteMetadata.title}</p>
        <button className="switcher" onClick={theme.toggleDark}>
          {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
        </button>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/work" className="nav-link-text">
              Work
            </Link>
          </li>
        </ul>
      </nav>
      {/* <h1 className={heading}>{pageTitle}</h1> */}
      {children}
    </main>
    </div> )}
    </ThemeContext.Consumer>
  )
}

export default Layout