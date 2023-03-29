import { people_api_url, useCreatePerson, useGetPerson, useUpdatePerson } from '@/hooks/usePeople'
import { Box, Skeleton } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { PersonProfile } from '../PersonProfile/PersonProfile'
// import { useSWRConfig } from 'swr'
// import { I_PersonForm, PersonForm } from '../PersonForm/PersonForm'
import DialogContainer from './DialogContainer'

import * as S from './styles'

interface I_Props {
  open: boolean
  setOpen: (open: boolean) => void
  person_id: string
}

export const PersonInfoDialog = ({ person_id, open, setOpen }: I_Props) => {
  const { data, isLoading } = useGetPerson(person_id)
  // const { trigger: triggerUpdate } = useUpdatePerson()
  // const { mutate } = useSWRConfig()

  // const handleUpdate = async (data: I_PersonForm) => {
  //   if (person_data) {
  //     const update_data = Object.assign(data, { id: person_data._id })
  //     await triggerUpdate(update_data)
  //     mutate(people_api_url)
  //   }
  // }

  // const handleSubmit = async (data: I_PersonForm) => {
  //   await handleUpdate(data)
  //   setOpen(false)
  // }

  if (isLoading) {
    return (
      <DialogContainer title='Loading' text={'Loading'} open={open} setOpen={setOpen}>
        <Skeleton height={300} width={200} />
      </DialogContainer>
    )
  }

  if (data)
    return (
      <DialogContainer open={open} setOpen={setOpen}>
        <S.Pane>
          <PersonProfile data={data} short />
        </S.Pane>
        <Box
          sx={{ textDecoration: 'underline', margin: '1rem 0', width: '100%', textAlign: 'center' }}
        >
          <Link href={'/lab1/person/info/' + data._id}>More details</Link>
        </Box>
      </DialogContainer>
    )
  else {
    return (
      <Box>
        <h2>Error fetching person data</h2>
      </Box>
    )
  }
}
