import { QueryOptions } from 'react-query'

import { useMakerQueryV2 } from 'requests/base/v2'
import { PaginateParams } from 'requests/types/common'

import { PaginatedGrouping } from '../types'

type UsePessoasQueryParams = {
  variables?: PaginateParams & { ungroup: boolean }
  options?: QueryOptions<PaginatedGrouping>
}

export const usePessoasQuery = ({
  variables,
  options,
}: UsePessoasQueryParams) =>
  useMakerQueryV2<PaginatedGrouping>({
    url: '/Pessoa',
    key: ['/Pessoa', variables],
    variables,
    options,
  })

export const usePessoasQueryKey = '/Pessoa'
