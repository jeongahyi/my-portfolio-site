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
            padding: "30px",
            position: "relative"
        }}>
          <span>
            Bulit by&nbsp; 
            <a href={url}>{title}</a>
          </span>
        </footer>
    )
}

export default Footer