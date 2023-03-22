import { Box, Typography } from '@mui/material'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'

export async function getServerSideProps() {
  return {
    props: { header: 'About' },
  }
}

const article = () => (
  <article>
    <Typography fontSize='28px' margin='2rem'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae quaerat possimus
      enim! Voluptatibus expedita officia iusto, tempore animi, dicta quaerat eveniet labore facilis
      sit saepe ea nesciunt repellat non!
    </Typography>
  </article>
)

export default function About({ header }: { header: string }) {
  return (
    <MainLayout title='About' description='About page'>
      <main>
        <h1>{header}</h1>
        <Box>
          {article()}
          {article()}
          {article()}
          {article()}
          {article()}
          {article()}
          {article()}
          {article()}
          {article()}
        </Box>
      </main>
    </MainLayout>
  )
}
