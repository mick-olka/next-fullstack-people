import { SGridPane } from '@/styles/general'
import { I_Person } from '@/utils/Models'
import React, { useEffect, useState } from 'react'
import { PersonInfoDialog } from '../../Dialogs/PersonInfoDialog'
import { PersonCard } from '../PersonCard/PersonCard'

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
  const onCardClick = (id: string) => {
    setPersonId(id)
    handleOpenInfo()
  }
  return (
    <SGridPane>
      {data.map((p) => (
        <PersonCard key={p._id} data={p} onClick={() => onCardClick(p._id)} />
      ))}
      {personId && <PersonInfoDialog person_id={personId} open={open} setOpen={setOpen} />}
    </SGridPane>
  )
}
