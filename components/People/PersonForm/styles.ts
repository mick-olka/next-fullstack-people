import { Box, Button, TextField } from '@mui/material'

import styled from 'styled-components'

export const Pane = styled.div`
  margin: 0;
`

export const TextFieldStyled = styled(TextField)`
  width: 15rem;
  border-radius: 15px;
  margin: 0.5rem;
  background-color: white;
  color: #fff;
  .MuiFormLabel-root {
    font-size: 20px;
  }
`

export const TextFieldBox = styled(Box)`
  display: flex;
  max-width: 30rem;
  margin: 1px auto;
  justify-content: space-between;
  align-items: center;
`

export const ButtonStyled = styled(Button)`
  &&& {
    width: 16rem;
    border-radius: 20px;
    padding: 1.8 2.5rem;
    margin: 1rem auto 0;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textWhite};
    background-color: ${({ theme }) => theme.buttonPrimary};
  }
`
