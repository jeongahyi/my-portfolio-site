import React from 'react'
import styled, { createGlobalStyle }  from 'styled-components'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
    background: #2d2d2d;
    color: #dedede;
  }
`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;
  min-height: 100vh;
  font-family: sans-serif;
  main {
    align-self: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <title>{pageTitle}</title>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element,
}

export default Layout