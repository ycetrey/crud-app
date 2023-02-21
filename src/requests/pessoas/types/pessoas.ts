import { Paginated } from 'requests/types/common'

export type Pessoa = {
  codigo: string
  cpfCNPJCache: string
  dhalteracao: string
  dhinclusao: string
  disabled: boolean
  id: number
  idUtilizador: number
  label: string
  nome: string
  nomeReduz: string
  pessoaJuridica: {
    cnpj: string
    contribuinte: boolean
    dataAtualizacao: string
    disabled: boolean
    id: number
    ie: string
    label: string
    optanteSimples: boolean
    readyOnly: boolean
  }
  readyOnly: boolean
  tipo: {
    constante: string
    descricao: string
    disabled: boolean
    id: number
    label: string
    ordem: number
    readyOnly: boolean
    visivel: boolean
  }
  utilizador: {
    id: number
    nome: string
  }
}

export type PessoaList = Pessoa[]

export type PaginatedGrouping = Paginated<Pessoa>
