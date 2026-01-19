import Layout from '@components/layout'
import { getLocalDay } from '@utils/date'
import type React from 'react'
import CardOrder from '@features/CardOrder'

export const Dashboard: React.FC = () => {
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

          <div className="space-y-4 pt-8">
            {new Array(5).fill('').map((_, index) => (
              <CardOrder key={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
