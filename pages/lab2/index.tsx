import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import * as S from './styles'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { useDeletePerson, useGetPeopleList } from '@/hooks/usePeople'
import { RoundButton, SGridPane } from '@/styles/general'
import { SquareCard } from '@/components/Card/Card'
import { AddPersonDialog } from '@/components/Dialogs/AddPersonDialog'
import { PersonGrid, PeopleTable, PersonCard } from '@/components/People'
import { SearchField } from '@/components/Search/SearchField'
import { useRouter } from 'next/router'
import { PeopleSlider } from '@/components/People'

export default function Lab2Page() {
  const [query, setQuery] = useState<string | null>(null)
  const { data, mutate } = useGetPeopleList(query || undefined)
  const navigate = useRouter()

  const [addPersonDialogOpen, setAddPersonDialogOpen] = useState(false)

  const onRowClick = (id: string) => {
    navigate.push('/lab1/person/edit/' + id)
  }

  const handleSearchTrigger = (query: string) => {
    setQuery(query || null)
  }

  return (
    <MainLayout title='Lab1' description='Lab1'>
      <S.Pane>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
            '& > *': { margin: '1rem' },
          }}
        >
          <h1>Lab #2</h1>
          <RoundButton variant='contained' onClick={() => setAddPersonDialogOpen(true)}>
            <AddRoundedIcon />
          </RoundButton>
          <SearchField onSearch={handleSearchTrigger} />
        </Box>
        {data && (
          <>
            <PersonGrid data={data} />
            <Box sx={{ marginTop: '2rem' }}>
              <h1 style={{ margin: '1rem' }}>Statistics</h1>
              <PeopleTable
                list={data}
                // onSelect={(ids) => setSelected(ids)}
                onRowClick={onRowClick}
              />
            </Box>
            <Box sx={{ textAlign: 'center', margin: '3rem 0' }}>
              <h2>Favorites</h2>
              <PeopleSlider>
                {data.map((p) => (
                  <PersonCard data={p} onClick={() => null} />
                ))}
              </PeopleSlider>
            </Box>
          </>
        )}
        <AddPersonDialog open={addPersonDialogOpen} setOpen={setAddPersonDialogOpen} />
      </S.Pane>
    </MainLayout>
  )
}
