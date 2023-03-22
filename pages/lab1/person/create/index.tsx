import { useSWRConfig } from 'swr'

import * as S from './styles'

import { I_PersonForm, PersonForm } from '@/components/PersonForm/PersonForm'
import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { useCreatePerson, people_api_url } from '@/hooks/usePeople'
import { useRouter } from 'next/router'

export default function CreatePersonPage() {
  const { trigger: triggerCreate } = useCreatePerson()
  const { mutate } = useSWRConfig()
  const router = useRouter()

  const handleCreate = async (data: I_PersonForm) => {
    await triggerCreate(data)
    mutate(people_api_url)
  }

  const handleSubmit = async (data: I_PersonForm) => {
    await handleCreate(data)
    router.push('/lab1')
  }

  return (
    <MainLayout title='Add' description='Add new person'>
      <S.Pane>
        CreatePerson
        <PersonForm onSubmit={handleSubmit} />
      </S.Pane>
    </MainLayout>
  )
}
