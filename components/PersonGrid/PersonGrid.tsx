import { SGridPane } from '@/styles/general'
import { I_Person } from '@/utils/Models'
import { Avatar, Box } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SquareCard } from '../Card/Card'
import { PersonInfoDialog } from '../Dialogs/PersonInfoDialog'

export const PersonGrid = ({ data }: { data: I_Person[] }) => {
  const [open, setOpen] = useState(false)
  const [personId, setPersonId] = useState<string | null>(null)
  const handleOpenInfo = () => {
    if (personId) {
      setOpen(true)
    }
  }
  useEffect(() => {
    if (personId) handleOpenInfo()
  }, [personId])
  return (
    <SGridPane>
      {data.map((p, i) => (
        // <Link key={p._id} href='/lab1'>
        <SquareCard>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '1rem',
            }}
            onClick={() => {
              setPersonId(p._id)
              handleOpenInfo()
            }}
          >
            <Avatar
              sx={{ width: 176, height: 176, margin: '0 auto' }}
              alt={p.name}
              src={`https://xsgames.co/randomusers/assets/avatars/${p.sex}/${i}.jpg`}
            />
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <h2>{p.name}</h2>
              <p style={{ color: '#666' }}>{p.address}</p>
            </Box>
          </Box>
        </SquareCard>
        // </Link>
      ))}
      <PersonInfoDialog person_id={personId!} open={open} setOpen={setOpen} />
    </SGridPane>
  )
}
