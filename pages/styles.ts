import { Box } from '@mui/material'

import styled from 'styled-components'

import { s } from '@/styles/variables'

export const MainContent = styled(Box)`
  display: flex;
`

export const Wrapper = styled.div`
  max-width: ${s.full};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`
