import { useEffect, useState } from 'react'
import { useAuth } from 'hooks/useAuth'
import { api } from 'services/axios'

type PessoaListProps = [
  {
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
]

export const PessoaPage = () => {
  const { auth } = useAuth()
  const [pessoaList, setPessoaList] = useState<PessoaListProps>([
    {},
  ] as PessoaListProps)

  useEffect(() => {
    api.get('/Pessoa').then((data) => setPessoaList(data.data.data))
  }, [auth])

  useEffect(() => {
    console.log('pessoaList', pessoaList)
  }, [pessoaList])

  return <></>
}
