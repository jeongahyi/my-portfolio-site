import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    titleSwitchContainer,
    switcher,
    dark,
    light
} from './layout.module.css'
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
    {theme => ( <div className={theme.dark? dark : light}>
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={titleSwitchContainer}>
        <p className={siteTitle}>{data.site.siteMetadata.title}</p>
        <button className={switcher} onClick={theme.toggleDark}>
          {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
        </button>
      </div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Landing
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/work" className={navLinkText}>
              Work
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    </div> )}
    </ThemeContext.Consumer>
  )
}

export default Layout