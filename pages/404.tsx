import { Box } from '@mui/material'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'

export default function Custom404() {
  return (
    <MainLayout title='Not Found' description='Page not Found'>
      <Box sx={{ padding: '2rem', textAlign: 'center', color: '#333' }}>
        <h1>404: Page Not Found</h1>
      </Box>
    </MainLayout>
  )
}
