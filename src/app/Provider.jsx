import React from 'react'
import { ThemeProvider } from 'next-themes'
const Provider = ({children}) => {
  return (
    <ThemeProvider attribute='class' >
   <div className='text-white dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-500'>
      {children}
    </div>
    </ThemeProvider>
  )
}

export default Provider
