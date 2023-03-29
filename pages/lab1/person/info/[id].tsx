import * as S from './styles'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { getPerson } from '@/hooks/usePeople'
import { I_Person } from '@/utils/Models'
import { PersonProfile } from '@/components/People/PersonProfile/PersonProfile'

export async function getServerSideProps({ params }: { params: { id: string } }): Promise<{
  props: { data: I_Person }
}> {
  const data = await getPerson(params.id)
  return {
    props: { data },
  }
}

export default function PersonPage({ data }: { data: I_Person }) {
  return (
    <MainLayout title={data.name} description='Person page'>
      <PersonProfile data={data} />
    </MainLayout>
  )
}
