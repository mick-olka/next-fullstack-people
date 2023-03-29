import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { I_Person } from '@/utils/Models'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const field = (label: string, text: string) => (
  <S.Field>
    <b>{label}:</b>
    <Typography fontSize='1.2rem'>{text || 'empty'}</Typography>
  </S.Field>
)

export const PersonProfile = ({ data, short }: { data: I_Person; short?: boolean }) => {
  return (
    <S.Pane color={data.color}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h1 style={{ margin: 0 }}>{data.name}</h1>
        <Link href={`/lab1/person/edit/${data._id}`}>
          <IconButton sx={{ marginLeft: '1rem' }}>
            <EditOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
      <Avatar
        src={`https://xsgames.co/randomusers/assets/avatars/${data.sex}/${data.age}.jpg`}
        sx={{ width: '300px', height: '300px', marginLeft: '1rem' }}
      />
      {/* {field('Name', data.name)} */}
      {field('Phone Number', data.phone)}
      {field('Age', String(data.age))}
      {field('Sex', data.sex)}
      {field('Date of Birth', String(data.dob).split('T')[0])}
      {!short && (
        <>
          {field('Email', data.email)}
          {field('Country', data.country)}
          {field('City', data.address)}
          {field('Color', data.color)}
          {field('About', data.about)}
          <div>
            <div></div>
            <Image src='/images/map.jpg' alt='map' width={600} height={300} />
          </div>
        </>
      )}
    </S.Pane>
  )
}
