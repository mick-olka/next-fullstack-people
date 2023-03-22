import { Table } from '@mui/material'
import styled from 'styled-components'

export const Pane = styled.div`
  margin: 1rem;
`
export const TableStyled = styled(Table)`
  background-color: ${({ theme }) => theme.bgPrimary};
`
