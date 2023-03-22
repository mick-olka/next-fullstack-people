import { I_Person } from '@/utils/Models'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

const field = (label: string, text: string) => (
  <S.Field>
    <h3>{label}:</h3>
    <Typography fontSize='1.2rem'>{text || 'empty'}</Typography>
  </S.Field>
)

export const PersonProfile = ({ data }: { data: I_Person }) => {
  return (
    <S.Pane>
      <h1>Profile</h1>
      {field('Name', data.name)}
      {field('Phone Number', data.phone)}
      {field('Age', String(data.age))}
      {field('Sex', data.sex)}
      {field('Date of Birth', String(data.dob))}
      {field('Email', data.email)}
      {field('Country', data.country)}
      {field('City', data.address)}
      {field('Color', data.color)}
      {field('About', data.about)}
      <div>
        <div></div>
        <Image src='/images/map.jpg' alt='map' width={600} height={300} />
      </div>
      <Link href={`/lab1/person/edit/${data._id}`}>
        <Button variant='contained'>Edit</Button>
      </Link>
    </S.Pane>
  )
}
