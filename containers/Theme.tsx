import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, ITheme } from '@/styles/theme'

interface IThemeProps {
  children: React.ReactNode
}

const Theme = ({ children }: IThemeProps) => {
  const currentTheme: ITheme = defaultTheme

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default Theme
