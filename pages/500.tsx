import { Box } from '@mui/material'

import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'

export default function Custom500() {
  return (
    <MainLayout title='Server Error' description='Server error occurred'>
      <Box sx={{ padding: '2rem', textAlign: 'center', color: '#333' }}>
        <h1>500: Server-side error occurred</h1>
      </Box>
    </MainLayout>
  )
}
