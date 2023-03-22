import { people_api_url, useCreatePerson } from '@/hooks/usePeople'
import React from 'react'
import { useSWRConfig } from 'swr'
import { I_PersonForm, PersonForm } from '../PersonForm/PersonForm'
import DialogContainer from './DialogContainer'

import * as S from './styles'

interface I_Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export const AddPersonDialog = ({ open, setOpen }: I_Props) => {
  const { trigger: triggerCreate } = useCreatePerson()
  const { mutate } = useSWRConfig()

  const handleCreate = async (data: I_PersonForm) => {
    await triggerCreate(data)
    mutate(people_api_url)
  }

  const handleSubmit = async (data: I_PersonForm) => {
    await handleCreate(data)
    setOpen(false)
  }

  return (
    <DialogContainer
      title='Add Person'
      //   text='Fill form and submit to create new person'
      open={open}
      setOpen={setOpen}
    >
      <S.Pane>
        <PersonForm onSubmit={handleSubmit} />
      </S.Pane>
    </DialogContainer>
  )
}
