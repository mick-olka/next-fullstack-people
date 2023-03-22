import styled from 'styled-components'

import { v } from '@/styles/variables'

export const Footer = styled.footer`
  max-width: 1520px;
  width: 100%;

  margin: 0 auto;

  padding: 0 16px 7px;

  display: flex;
  flex-direction: column;

  flex: 1 0 auto;
`

export const FooterIconWrapper = styled.div`
  margin-bottom: 14px;

  & img {
    width: 196px;
    height: 33px;
  }
`

export const FooterLinksSection = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  gap: 10px;
`

export const FooterLinksBlock = styled.div``
export const BlockHeading = styled.h4`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.125em;
  font-weight: ${v.fontWeightSemiBold};

  margin-bottom: 26px;
`

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-weight: ${v.fontWeightRegular};
  font-size: 1em;

  & li {
    line-height: 30px;
    color: ${({ theme }) => theme.textPrimary};

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`

export const FooterCopyrightBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 14px 0;

  margin: 10px 0 0 0;

  border-top: 1px solid ${({ theme }) => theme.longDividerBg};
`

export const IconsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 24px;
  margin: 2rem;
`
