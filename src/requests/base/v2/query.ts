import { api } from 'configs/api/v2/axios'

type MakerQueryParams = {
  url: string
  params?: any // IMPROVEIT add types to variables
}

export const makerQuery = <TResult = any>({
  url,
  params,
}: MakerQueryParams): Promise<TResult> => {
  return api.get(url, { params }).then((res: any) => res?.data)
}
