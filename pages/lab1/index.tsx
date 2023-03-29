import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import { Box } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

import * as S from './styles'

import { PeopleTable } from '@/components/People'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { useDeleteManyPerson, useGetPeopleList } from '@/hooks/usePeople'
import { useRouter } from 'next/router'
import { RoundButton } from '@/styles/general'

export default function Lab1Page() {
  const { data, mutate } = useGetPeopleList()
  const [selected, setSelected] = useState<string[]>([])
  const { trigger: triggerDelete } = useDeleteManyPerson()
  const navigate = useRouter()

  const handleDelete = async () => {
    await triggerDelete(selected)
    mutate()
  }

  const onPersonClick = (id: string) => {
    navigate.push('/lab1/person/info/' + id)
  }

  return (
    <MainLayout title='Lab1' description='Lab1'>
      <S.Pane>
        <h1>Lab #1</h1>
        <Box sx={{ display: 'flex', margin: '0 2rem', justifyContent: 'space-between' }}>
          <Link href='/lab1/person/create'>
            <RoundButton variant='contained'>
              <AddRoundedIcon />
            </RoundButton>
          </Link>
          <RoundButton variant='contained' onClick={handleDelete} disabled={!selected.length}>
            <DeleteOutlineRoundedIcon />
          </RoundButton>
        </Box>
        {data && (
          <PeopleTable
            list={data}
            onSelect={(ids) => setSelected(ids)}
            onRowClick={onPersonClick}
          />
        )}
      </S.Pane>
    </MainLayout>
  )
}
