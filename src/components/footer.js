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
    <footer style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
      bottom: "0",
      padding: "35px",
      position: "relative",
      borderWidth: "0",
      borderStyle: "solid",
      borderColor: "#e5e7eb",
      borderTopWidth: "1px",
    }}>
    <span>
      Bulit by&nbsp;
      <a href={url}>{title}</a>
    </span>
    </footer>
  )
}

export default Footer