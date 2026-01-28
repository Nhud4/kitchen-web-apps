import EmptyData from '@components/elements/EmptyData'
import CardOrder from '@features/CardOrder'
import type React from 'react'

type Props = {
  data: TransactionList[]
  loading: boolean
}

export const OrderList: React.FC<Props> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="space-y-8 pt-8">
        {new Array(5).fill('').map((_, index) => (
          <CardOrder key={index} loading />
        ))}
      </div>
    )
  }

  if (data.length === 0) {
    return <EmptyData />
  }

  return (
    <div className="space-y-8 pt-8">
      {data.map((item, index) => (
        <CardOrder data={item} key={index} />
      ))}
    </div>
  )
}
