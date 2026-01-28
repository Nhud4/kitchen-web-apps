import Button from '@components/elements/Button'
import Layout from '@components/layout'
import ICONS from '@configs/icons'
import OrderList from '@features/OrderList'
import { useQuerySlice } from '@redux/hooks'
import { clearTransaction } from '@redux/slices/transaction'
import { fetchTransactionList } from '@redux/slices/transaction/action'
import { getLocalDay } from '@utils/date'
import { customDateFormat } from '@utils/date'
import type React from 'react'
import { useEffect, useState } from 'react'

const initialParams = {
  date: customDateFormat(new Date().toISOString(), 'yyyy-MM-dd'),
  page: 1,
  size: 0,
}

export const Dashboard: React.FC = () => {
  const [params, setParams] = useState(initialParams)
  const [isReload, setIsReload] = useState(false)

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

  const handleReload = () => {
    setIsReload(!isReload)
    setParams({
      date: customDateFormat(new Date().toISOString(), 'yyyy-MM-dd'),
      page: 1,
      size: 0,
    })
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isReload) {
      timeout = setTimeout(() => {
        setIsReload(!isReload)
      }, 5000)
    }
    return () => clearTimeout(timeout)
  }, [isReload])

  return (
    <Layout subTitle="Tampilan Dapur restoran" title="SaR-1 Cafe and Resto">
      <section className="page layout">
        <div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-orange">
                Daftar Pesanan
              </h1>
              <p className="text-neutral-5">{getLocalDay()}</p>
            </div>
            <Button disabled={isReload} onClick={handleReload}>
              <ICONS.Reload
                className={isReload && loading ? 'animate-spin' : ''}
              />
            </Button>
          </div>

          <OrderList data={data} loading={loading} />
        </div>
      </section>
    </Layout>
  )
}
