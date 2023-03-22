import { Card } from '@mui/material'
import styled from 'styled-components'

export const CardPane = styled(Card)`
  background-color: ${({ theme }) => theme.bgPrimary};
  height: 250px;
  width: 250px;
  padding: 0;
`
