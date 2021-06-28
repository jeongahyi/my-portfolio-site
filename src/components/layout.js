import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <title>{pageTitle}</title>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element,
}

export default Layout