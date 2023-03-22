import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from '@mui/material'
import Link from 'next/link'

import * as S from './styles'

import { I_Person } from '@/utils/Models'

const createData = (data: I_Person) => {
  return data
}

export default function PeopleTable({
  list,
  onDelete,
}: {
  list: I_Person[]
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => void
}) {
  const rows = list.map((el) => createData(el))
  return (
    <S.Pane>
      <TableContainer component={Paper}>
        <S.TableStyled aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Age</TableCell>
              <TableCell align='right'>Sex</TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>_</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='right'>
                  <Link href={`/lab1/person/info/${row._id}`}>
                    <Typography sx={{ textDecoration: 'underline' }}>{row.name}</Typography>
                  </Link>
                </TableCell>
                <TableCell align='right'>{row.age}</TableCell>
                <TableCell align='right'>{row.sex}</TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.email}</TableCell>
                <TableCell onClick={() => onDelete(row._id)} align='right'>
                  <Button>del</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </S.TableStyled>
      </TableContainer>
    </S.Pane>
  )
}
