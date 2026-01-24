import Button from '@components/elements/Button'
import Layout from '@components/layout'
import LoadingText from '@components/modules/LoadingText'
import ICONS from '@configs/icons'
import { useQuerySlice } from '@redux/hooks'
import { clearTransaction } from '@redux/slices/transaction'
import { fetchTransactionDetail } from '@redux/slices/transaction/action'
import { customDateFormat } from '@utils/date'
import { firestore } from '@utils/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

export const DetailOrder = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useQuerySlice<
    TransactionDetail | null,
    { id: string }
  >({
    clearSlice: clearTransaction('detail'),
    initial: id,
    key: 'detail',
    slice: 'transaction',
    thunk: fetchTransactionDetail(id),
  })

  const cashBack =
    data?.payment && data?.payment > 0
      ? (data?.payment || 0) - (data?.bill || 0)
      : 0

  const printerJob = () => {
    addDoc(collection(firestore, 'prints'), {
      cashier: data?.createdBy,
      createdAt: serverTimestamp(),
      customer: data?.customerName,
      date: data?.transactionDate,
      items: data?.items?.map((item) => ({
        name: item.name,
        price: item.price,
        qty: item.qty,
      })),
      kembalian: cashBack,
      orderNo: data?.code,
      printed: false,
      subtotal: data?.subtotal,
      table: data?.tableNumber,
      tax: data?.ppn,
      time: customDateFormat(data?.createdAt, 'HH.mm', 'WIB'),
      total: data?.bill,
      tunai: data?.payment,
    })
  }

  return (
    <Layout
      headerComponent={
        <div className="flex items-center text-white">
          <button className="w-12 h-12" onClick={() => navigate('/')}>
            <ICONS.Back />
          </button>
          <h1 className="text-lg font-bold">Detail Pesanan</h1>
        </div>
      }
      headerVariant="custom"
      title="Detail Pesanan"
    >
      <section className="layout page">
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="font-semibold text-orange">Informasi Pesanan</h1>

              <table className="my-4">
                <tbody className={styles.orderInfo}>
                  <tr>
                    <th>No Pesnan</th>
                    <td>
                      <LoadingText
                        className="pl-1"
                        data={data?.code}
                        loading={loading}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Tanggal</th>
                    <td>
                      <LoadingText
                        className="pl-1"
                        data={data?.transactionDate}
                        loading={loading}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Waktu</th>
                    <td>
                      <LoadingText
                        className="pl-1"
                        data={customDateFormat(data?.createdAt)}
                        loading={loading}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Pelanggan</th>
                    <td>
                      <LoadingText
                        className="pl-1 capitalize"
                        data={data?.customerName}
                        loading={loading}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>No Meja</th>
                    <td>
                      <LoadingText
                        className="pl-1"
                        data={data?.tableNumber}
                        loading={loading}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Waitress</th>
                    <td>
                      <LoadingText
                        className="pl-1"
                        data={data?.createdBy || '-'}
                        loading={loading}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="font-semibold text-orange">Informasi Menu</h1>

              <div className="text-sm">
                <div className="flex items-center gap-4 py-4 border-b border-b-border">
                  <p className="w-[80%] font-semibold">Item</p>
                  <p className="w-[20%] font-semibold">Qty</p>
                </div>

                {data?.items?.map((item, index) => (
                  <div
                    className="py-4 border-b border-b-border space-y-2"
                    key={index}
                  >
                    <div className="flex items-center gap-4">
                      <p className="w-[80%] capitalize">{item.name}</p>
                      <p className="w-[20%]">{item.qty}</p>
                    </div>
                    {item.note ? (
                      <div className="border border-border p-4 rounded-lg bg-white text-neutral-5">
                        {item.note}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            className="justify-center"
            leftIcon={<ICONS.Printer />}
            onClick={printerJob}
            variant="outline"
          >
            Cetak Resi
          </Button>
        </div>
      </section>
    </Layout>
  )
}
