import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <footer>
      <span>
        Bulit by&nbsp;
        <a href={url}>{title}</a>
      </span>
    </footer>
  )
}

export default Footer