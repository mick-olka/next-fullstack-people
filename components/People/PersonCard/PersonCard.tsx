import { SquareCard } from '@/components/Card/Card'
import { I_Person } from '@/utils/Models'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export const PersonCard = ({ data, onClick }: { data: I_Person; onClick: () => void }) => {
  return (
    <SquareCard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '1rem',
        }}
        onClick={onClick}
      >
        <Avatar
          sx={{ width: 176, height: 176, margin: '0 auto' }}
          alt={data.name}
          src={`https://xsgames.co/randomusers/assets/avatars/${data.sex}/${data.age}.jpg`}
        />
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <h2>{data.name}</h2>
          <Typography color='#666'>{data.address}</Typography>
        </Box>
      </Box>
    </SquareCard>
  )
}
