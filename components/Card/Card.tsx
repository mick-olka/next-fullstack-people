import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import React from 'react'

import * as S from './styles'

export const SquareCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.CardPane variant='outlined' sx={{ height: '100%', padding: 0 }}>
      <CardActionArea sx={{ height: '100%', padding: 0 }}>
        <CardContent sx={{ height: '100%', padding: 0 }}>{children}</CardContent>
      </CardActionArea>
    </S.CardPane>
  )
}
