import { createGlobalStyle } from 'styled-components'

import { v } from '@/styles/variables'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: .6px;
    height: 100%;
    background-color: ${({ theme }) => theme.bgSec};
  }

  html {
    height: 100vh;
    font-size: 16px;
  }

  #__next {
    height: 100%;
  }

  ul, ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
  }

  a.__activeLink {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
    font-weight: ${v.fontWeightMedium};
    font-size: 1rem;
    line-height: 19px;

    border-bottom: 3px solid transparent;
  }

  a.active {
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }

`
