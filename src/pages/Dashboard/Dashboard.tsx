import Layout from '@components/layout'
import CardOrder from '@features/CardOrder'
import { useQuerySlice } from '@redux/hooks'
import { clearTransaction } from '@redux/slices/transaction'
import { fetchTransactionList } from '@redux/slices/transaction/action'
import { getLocalDay } from '@utils/date'
import type React from 'react'
import { useState } from 'react'
// import { customDateFormat } from '@utils/date'

export const Dashboard: React.FC = () => {
  const initialParams = {
    page: 1,
    size: 0,
    // date: customDateFormat(new Date().toISOString(), 'yyyy-MM-dd'),
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

          {loading ? (
            <div className="space-y-8 pt-8">
              {new Array(5).fill('').map((_, index) => (
                <CardOrder key={index} loading />
              ))}
            </div>
          ) : (
            <div className="space-y-8 pt-8">
              {data.map((item, index) => (
                <CardOrder data={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
