import Layout from '@components/layout'
import OrderList from '@features/OrderList'
import { useQuerySlice } from '@redux/hooks'
import { clearTransaction } from '@redux/slices/transaction'
import { fetchTransactionList } from '@redux/slices/transaction/action'
import { getLocalDay } from '@utils/date'
import { customDateFormat } from '@utils/date'
import type React from 'react'
import { useState } from 'react'

export const Dashboard: React.FC = () => {
  const initialParams = {
    date: customDateFormat(new Date().toISOString(), 'yyyy-MM-dd'),
    page: 1,
    size: 0,
  }

  const [params] = useState(initialParams)

  const { data, loading } = useQuerySlice<
    TransactionList[],
    TransactionListParams
  >({
    clearSlice: clearTransaction('list'),
    initial: params,
    key: 'list',
    slice: 'transaction',
    thunk: fetchTransactionList(params),
  })

  return (
    <Layout subTitle="Tampilan Dapur restoran" title="SaR-1 Cafe and Resto">
      <section className="page layout">
        <div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-orange">
              Daftar Pesanan
            </h1>
            <p className="text-neutral-5">{getLocalDay()}</p>
          </div>

          <OrderList data={data} loading={loading} />
        </div>
      </section>
    </Layout>
  )
}
