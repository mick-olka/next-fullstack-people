import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

import PeopleTable from '@/components/PeopleTable/PeopleTable'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { useDeletePerson, useGetPeopleList } from '@/hooks/usePeople'

export default function Lab1Page() {
  const { data, mutate } = useGetPeopleList()
  const { trigger: triggerDelete } = useDeletePerson()

  const handleDelete = async (id: string) => {
    await triggerDelete(id)
    mutate()
  }

  return (
    <MainLayout title='Lab1' description='Lab1'>
      <S.Pane>
        <h1>Lab #1</h1>
        <Link href='/lab1/person/create'>
          <Button variant='contained'>Create</Button>
        </Link>
        {data && <PeopleTable list={data} onDelete={handleDelete} />}
      </S.Pane>
    </MainLayout>
  )
}
