import Button from '@components/elements/Button'
import BaseCard from '@components/modules/BaseCard'
import { customDateFormat } from '@utils/date'
import type React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

type Props = {
  data?: TransactionList
  loading?: boolean
}

export const CardOrder: React.FC<Props> = ({ data, loading }) => {
  const navigate = useNavigate()
  if (loading) {
    return (
      <BaseCard>
        <div className={styles.header}>
          <Skeleton width={150} />
          <Skeleton width={100} />
        </div>

        <div className="my-4 space-y-1">
          <div>
            <Skeleton width={150} />
          </div>
          <div>
            <Skeleton width={50} />
          </div>
          <div>
            <Skeleton width={100} />
          </div>
        </div>

        <Skeleton height={48} />
      </BaseCard>
    )
  }

  return (
    <BaseCard>
      <div className={styles.header}>
        <p>{data?.code}</p>
        <p>{customDateFormat(data?.createdAt || '', 'HH.mm', 'WIB')}</p>
      </div>

      <table className="my-4">
        <tbody className={styles.data}>
          <tr>
            <th>Pelanggan</th>
            <td className="capitalize">{data?.customerName}</td>
          </tr>
          <tr>
            <th>No Meja</th>
            <td>{data?.tableNumber}</td>
          </tr>
          <tr>
            <th>{data?.user.role === 'cashier' ? 'Kasir' : 'Waitress'}</th>
            <td>{data?.user.name}</td>
          </tr>
        </tbody>
      </table>

      <Button
        className="w-full justify-center"
        onClick={() => navigate(`/order/${data?.id}`)}
        variant="outline"
      >
        Detail Pesanan
      </Button>
    </BaseCard>
  )
}
