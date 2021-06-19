import React from 'react';
import PropTypes from 'prop-types'

const defaultState = {
    dark: false,
    toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
      const IsDark = JSON.parse(localStorage.getItem("dark"))
      if (IsDark) {
        this.setState({ dark: IsDark })
      } else if (supportsDarkMode()) {
        this.setState({ dark: true })
      }
  }

  render() {
      const { children } = this.props
      const { dark } = this.state
      return (
        <ThemeContext.Provider
          value={{
            dark,
            toggleDark: this.toggleDark
          }}
        >
          {children}
        </ThemeContext.Provider>
      )
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element
}

export default ThemeContext

export { ThemeProvider }