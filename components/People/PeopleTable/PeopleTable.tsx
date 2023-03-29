import * as S from './styles'

import { I_Person } from '@/utils/Models'
import { GridRowsProp, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'

const createData = (data: I_Person) => {
  return { id: data._id, ...data }
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'age', headerName: 'Age' },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'address', headerName: 'Place', width: 250 },
]

export function PeopleTable({
  list,
  onRowClick,
  onSelect,
}: {
  list: I_Person[]
  onRowClick: (id: string) => void
  onSelect?: (ids: string[]) => void
}) {
  const rows: GridRowsProp = list.map((el) => createData(el))
  return (
    <S.Pane>
      <S.TableStyled
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection={!!onSelect}
        onRowSelectionModelChange={(ids: GridRowSelectionModel) => {
          onSelect && onSelect(ids as string[])
        }}
        onRowClick={(param) => onRowClick(String(param.id))}
      />
    </S.Pane>
  )
}
