import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

// Wraps the root element
export const wrapRootElement = ({ element }) => {
    return <ThemeProvider>{element}</ThemeProvider>
}