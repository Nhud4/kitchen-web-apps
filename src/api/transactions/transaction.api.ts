import * as req from '@utils/httpRequest'

const endpoints = {
  main: '/transaction',
}

// transaction
export const getTransaction = async (params: TransactionListParams) => {
  const data = await req.get<ApiResponse<TransactionList[]>>(
    endpoints.main,
    params
  )
  return data
}

export const detailTransaction = async (code: string) => {
  const data = await req.get<ApiResponse<TransactionDetail>>(
    `${endpoints.main}/${code}`
  )
  return data
}
