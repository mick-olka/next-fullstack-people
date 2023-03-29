import { RoundButton } from '@/styles/general'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React, { ChangeEvent, useState } from 'react'

import * as S from './styles'

export const SearchField = ({
  value,
  onChange,
  onSearch,
}: {
  value?: string
  onChange?: (txt: string) => void
  onSearch: (query: string) => void
}) => {
  const [text, setText] = useState(value || '')
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(e.target.value)
    onChange && onChange(e.target.value)
  }
  const triggerSearch = () => {
    onSearch(text)
  }
  return (
    <S.Pane>
      <TextField value={text} onChange={handleChange} variant='filled' size='small' />
      <RoundButton onClick={triggerSearch} sx={{ marginLeft: '0.5rem' }} variant='contained'>
        <SearchOutlinedIcon />
      </RoundButton>
    </S.Pane>
  )
}
