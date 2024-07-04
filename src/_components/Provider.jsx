import React from 'react'
import { ThemeProvider } from 'next-themes'
const Provider = ({children}) => {
  return (
    <ThemeProvider>
    <div className='' >
      {children}
    </div>
    </ThemeProvider>
  )
}

export default Provider
