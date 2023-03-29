import Link from 'next/link'
import React from 'react'

import * as S from './styles'

import { SquareCard } from '../Card/Card'
import { labs } from '../NavPane/data'
import { Box } from '@mui/material'
import { SGridPane } from '@/styles/general'

export const HomePage = () => {
  return (
    <S.Pane>
      <h1>HomePage</h1>
      <SGridPane>
        {labs.map((l) => (
          <Link key={l.path} href={l.path}>
            <SquareCard>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <h2>{l.name}</h2>
              </Box>
            </SquareCard>
          </Link>
        ))}
      </SGridPane>
    </S.Pane>
  )
}
