import { useMemo } from 'react'
import { useQuery, QueryKey, QueryOptions, UseQueryResult } from 'react-query'

import { makerQuery } from './query'

type UseMakerQueryParams<TResult> = {
  key?: QueryKey
  url: string
  variables?: any
  options?: QueryOptions<TResult, any, TResult, QueryKey>
}

export const useMakerQueryV2 = <TResult>({
  key,
  url,
  variables,
  options = {},
}: UseMakerQueryParams<TResult>): UseQueryResult<TResult> & {
  isInitialFetching: boolean
  isUpdating: boolean
  hasNoData: boolean
} => {
  const query = useQuery<TResult, QueryKey>(
    key ?? [url, variables && variables],
    () => makerQuery<TResult>({ url, params: variables }),
    options
  )

  const hasNoData = useMemo(() => {
    if (!query) {
      return true
    }

    return query.data instanceof Array ? !query.data.length : !query.data
  }, [query])

  const isInitialFetching = useMemo(
    () => query.status === 'loading',
    [query.status]
  )

  const isUpdating = useMemo(
    () => query.status === 'success' && query.isFetching,
    [query.isFetching, query.status]
  )

  return {
    ...query,
    isInitialFetching,
    hasNoData,
    isUpdating,
  }
}
