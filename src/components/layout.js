import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import '../style/main.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <title>{pageTitle}</title>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element,
}

export default Layout