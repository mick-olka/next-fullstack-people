import { Drawer } from '@mui/material'
import styled from 'styled-components'

export const DrawerStyled = styled(Drawer)`
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.bgSec};
    color: #fff;
  }
  & .MuiListItemIcon-root {
    color: #fff;
  }
`
