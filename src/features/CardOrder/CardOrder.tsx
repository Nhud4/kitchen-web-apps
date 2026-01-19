import Button from '@components/elements/Button'
import BaseCard from '@components/modules/BaseCard'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

export const CardOrder = () => {
  const navigate = useNavigate()

  return (
    <BaseCard>
      <div className={styles.header}>
        <p>TRX-2601010001</p>
        <p>10.30 WIB</p>
      </div>

      <table className={styles.data}>
        <tr>
          <th>Pelanggan</th>
          <td>Wahyudin</td>
        </tr>
        <tr>
          <th>No Meja</th>
          <td>10</td>
        </tr>
        <tr>
          <th>Pesanan</th>
          <td>4 Menu</td>
        </tr>
      </table>

      <Button
        className="w-full justify-center"
        onClick={() => navigate('/order/TRX-2601010001')}
        variant="outline"
      >
        Detail Pesanan
      </Button>
    </BaseCard>
  )
}
