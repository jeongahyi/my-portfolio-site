import * as React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../style/main.scss';

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
    <main className="container">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className="nav-container">
        <Link to="/" >
          <p className="site-title">{data.site.siteMetadata.title}</p>
        </Link>
        <nav>
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">
                About
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/experience" className="nav-link-text">
                Experience
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/projects" className="nav-link-text">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <h1 className={heading}>{pageTitle}</h1> */}
      {children}
    </main>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element,
};

export default Layout