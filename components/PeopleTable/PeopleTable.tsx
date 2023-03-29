import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
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
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>Age</TableCell>
              <TableCell align='left'>Sex</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>_</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='left'>
                  <Link href={`/lab1/person/info/${row._id}`}>
                    <Typography sx={{ textDecoration: 'underline' }}>{row.name}</Typography>
                  </Link>
                </TableCell>
                <TableCell align='left'>{row.age}</TableCell>
                <TableCell align='left'>{row.sex}</TableCell>
                <TableCell align='left'>{row.phone}</TableCell>
                <TableCell align='left'>{row.email}</TableCell>
                <TableCell onClick={() => onDelete(row._id)} align='left'>
                  <Button>
                    <DeleteOutlineOutlinedIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </S.TableStyled>
      </TableContainer>
    </S.Pane>
  )
}
