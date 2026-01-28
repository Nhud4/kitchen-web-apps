import styles from './styles.module.css'

export const EmptyData = () => {
  return (
    <section className={styles.container}>
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <div className={styles.emptyBag}>
            <div className={styles.bagSimple}>
              <div className={styles.bagSimpleHandle}></div>
              <div className={styles.bagSimpleBody}></div>
            </div>
          </div>
        </div>
        <div className={styles.emptyTitle}>Tidak Ada Pesanan</div>
        <div className={styles.emptyDescription}>
          Belum ada pesanan yang perlu diproses.
        </div>
      </div>
    </section>
  )
}
