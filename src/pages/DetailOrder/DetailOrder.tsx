import ICONS from '@configs/icons'
import Layout from '@components/layout'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { dateOfTransactionFormat } from '@utils/date'
import Button from '@components/elements/Button'
import { useNavigate } from 'react-router-dom'

export const DetailOrder = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  return (
    <Layout
      title="Detail Pesanan"
      headerVariant="custom"
      headerComponent={
        <div className="flex items-center text-white">
          <button className="w-12 h-12" onClick={() => navigate('/')}>
            <ICONS.Back />
          </button>
          <h1 className="text-lg font-bold">Detail Pesanan</h1>
        </div>
      }
    >
      <section className="layout page pb-28">
        <div className="space-y-4">
          <div>
            <h1>Informasi Pesanan</h1>

            <table className={styles.orderInfo}>
              <tr>
                <th>No Pesnan</th>
                <td>{id}</td>
              </tr>
              <tr>
                <th>Tanggal Pesanan</th>
                <td>{dateOfTransactionFormat(new Date().toISOString())}</td>
              </tr>
              <tr>
                <th>Waktu Pesanan</th>
                <td>10.30 WIB</td>
              </tr>
              <tr>
                <th>Pelanggan</th>
                <td>Wahyudin</td>
              </tr>
              <tr>
                <th>No Meja</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Kasir</th>
                <td>Udin</td>
              </tr>
            </table>
          </div>

          <div>
            <h1>Informasi Menu</h1>

            <div className="text-sm">
              <div className="flex items-center gap-4 py-4 border-b border-b-border">
                <p className="w-[80%] font-semibold">Item</p>
                <p className="w-[20%] font-semibold">Qty</p>
              </div>

              {new Array(1).fill('').map((_, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-b-border space-y-2"
                >
                  <div className="flex items-center gap-4">
                    <p className="w-[80%]">Mie Goreng sambal mangga</p>
                    <p className="w-[20%]">1</p>
                  </div>
                  <div className="border border-border p-4 rounded-lg bg-white text-neutral-5">
                    Tambah Nasi
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 grid grid-cols-2 w-full gap-4 px-4 py-8 border-t border-t-border bg-neutral-4">
        <Button
          className="justify-center"
          leftIcon={<ICONS.Printer />}
          variant="outline"
        >
          Cetak Resi
        </Button>
        <Button className="justify-center">Selesaikan Pesanan</Button>
      </div>
    </Layout>
  )
}
