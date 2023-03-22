import { Avatar, Box, Button, CardMedia } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

import * as S from './styles'

import PeopleTable from '@/components/PeopleTable/PeopleTable'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { useDeletePerson, useGetPeopleList } from '@/hooks/usePeople'
import { SGridPane } from '@/styles/general'
import { SquareCard } from '@/components/Card/Card'
import { AddPersonDialog } from '@/components/Dialogs/AddPersonDialog'
import { PersonGrid } from '@/components/PersonGrid/PersonGrid'

export default function Lab2Page() {
  const { data, mutate } = useGetPeopleList()
  const { trigger: triggerDelete } = useDeletePerson()

  const [addPersonDialogOpen, setAddPersonDialogOpen] = useState(false)

  const handleDelete = async (id: string) => {
    await triggerDelete(id)
    mutate()
  }

  return (
    <MainLayout title='Lab1' description='Lab1'>
      <S.Pane>
        <Box sx={{ margin: '1rem' }}>
          <h1>Lab #2</h1>
          <Button variant='contained' onClick={() => setAddPersonDialogOpen(true)}>
            Add New Person
          </Button>
        </Box>
        {data && (
          <>
            <PersonGrid data={data} />
            <Box sx={{ marginTop: '2rem' }}>
              <h1 style={{ margin: '1rem' }}>Statistics</h1>
              <PeopleTable list={data} onDelete={handleDelete} />
            </Box>
          </>
        )}
        <AddPersonDialog open={addPersonDialogOpen} setOpen={setAddPersonDialogOpen} />
      </S.Pane>
    </MainLayout>
  )
}
