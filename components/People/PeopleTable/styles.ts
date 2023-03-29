import { DataGrid } from '@mui/x-data-grid'
import { Table } from '@mui/material'
import styled from 'styled-components'

export const Pane = styled.div`
  margin: 1rem;
  height: 600px;
`
export const TableStyled = styled(DataGrid)`
  background-color: ${({ theme }) => theme.bgPrimary};
`
