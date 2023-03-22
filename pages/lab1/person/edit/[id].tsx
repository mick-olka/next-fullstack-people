import * as S from './styles'

import { I_PersonForm, PersonForm } from '@/components/PersonForm/PersonForm'
import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { getPerson, people_api_url, useUpdatePerson } from '@/hooks/usePeople'
import { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { I_Person } from '@/utils/Models'

export async function getServerSideProps({ params }: { params: { id: string } }): Promise<{
  props: { data: I_Person }
}> {
  const data = await getPerson(params.id)
  return {
    props: { data },
  }
}

export default function EditPersonPage({ data: initData }: { data: I_Person }) {
  const { trigger: triggerUpdate } = useUpdatePerson()
  const { mutate } = useSWRConfig()
  const router = useRouter()

  const handleUpdate = async (data: I_PersonForm) => {
    const update_data = Object.assign(data, { id: initData._id })
    await triggerUpdate(update_data)
    mutate(people_api_url)
  }

  const handleSubmit = async (data: I_PersonForm) => {
    await handleUpdate(data)
    router.push('/lab1')
  }

  return (
    <MainLayout title='Edit' description='Edit person'>
      <S.Pane>
        <h1>Edit: {initData.name}</h1>
        <PersonForm initData={initData} onSubmit={handleSubmit} />
      </S.Pane>
    </MainLayout>
  )
}
