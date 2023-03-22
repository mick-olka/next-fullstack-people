import styled from 'styled-components'

import { s } from '@/styles/variables'

export const Header = styled.header`
  padding: 20px 50px;

  max-width: ${s.full};
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
  }
`

export const LogoLinksNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
`

export const HeaderContentCenter = styled.div`
  flex-grow: 1;
  text-align: center;
`
