import { useEffect, useState } from 'react'
import { usePessoasQuery } from 'requests/pessoas/queries'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { PessoaList } from 'requests/pessoas'

import { dateTimeFormatter, stringFormatter } from 'helpers'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'tipoPessoa',
    headerName: 'Tipo',
    width: 70,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.pessoaFisica ? 'PF' : 'PJ'}`,
  },
  { field: 'nomeReduz', headerName: 'Nome / Apelido', width: 430 },
  {
    field: 'documento',
    headerName: 'CPF/CNPJ',
    width: 230,
    description: 'Este campo não pode ser ordenado',
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${
        params.row.pessoaFisica
          ? stringFormatter('000.000.000-00', params.row.pessoaFisica.cpf)
          : stringFormatter(
              '00.000.000/0000-00',
              params.row.pessoaJuridica.cnpj
            )
      }`,
  },
  {
    field: 'dhinclusao',
    headerName: 'Data inclusão',
    type: 'number',
    description: 'Este campo não pode ser ordenado',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      dateTimeFormatter(params.row.dhinclusao),
  },
  {
    field: 'dhalteracao',
    headerName: 'Data alteração',
    type: 'number',
    description: 'Este campo não pode ser ordenado',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      dateTimeFormatter(params.row.dhalteracao),
  },
  {
    field: 'nome',
    headerName: 'Razão Social / Nome completo',
    description: 'Este campo não pode ser ordenado',
    sortable: false,
    width: 460,
    valueGetter: (params: GridValueGetterParams) =>
      `${
        params.row.pessoaFisica
          ? params.row.pessoaFisica.label
          : params.row.pessoaJuridica.label
      }`,
  },
]

export const PessoaPage = () => {
  const { data: pessoas } = usePessoasQuery({})
  const [rows, setRows] = useState<PessoaList>([])

  useEffect(() => {
    if (pessoas) setRows(pessoas?.data)
  }, [pessoas])
  return (
    <div style={{ height: 635, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
