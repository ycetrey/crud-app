import { Pessoa } from 'requests/pessoas'

export type VSPessoasListFilter = {
  frase?: string
}

export type VSPessoasListRowProps = {
  pessoa: Pessoa
}
