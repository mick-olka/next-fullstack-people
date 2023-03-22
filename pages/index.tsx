import { SWRConfig } from 'swr'

import { HomePage } from '@/components/HomePage/HomePage'
import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { getPeopleList } from '@/hooks/usePeople'
import { I_Person } from '@/utils/Models'

export async function getServerSideProps(): Promise<{
  props: { fallback: { '/api/people': I_Person[] } }
}> {
  const data = await getPeopleList()
  return {
    props: { fallback: { '/api/people': data } },
  }
}

export default function Home({ fallback }: { fallback: { '/api/people': I_Person[] } }) {
  return (
    <SWRConfig value={{ fallback }}>
      <MainLayout title='Home' description='Home page'>
        <HomePage />
      </MainLayout>
    </SWRConfig>
  )
}
