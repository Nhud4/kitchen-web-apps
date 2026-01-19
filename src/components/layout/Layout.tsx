import Header from '@components/elements/Header'

// import { authProfile } from '@redux/slices/auth/action'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
  title?: string
  subTitle?: string
  headerVariant?: 'home' | 'custom'
  headerComponent?: React.ReactNode
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Dashboard',
  subTitle,
  headerComponent,
  headerVariant,
}) => {
  // const dispatch = useAppDispatch()
  // const { data } = useAppSelector((state) => state.auth.profile)

  // useEffect(() => {
  //   if (!data.name) {
  //     dispatch(authProfile())
  //   }
  // }, [dispatch, data])

  return (
    <main className={styles.container}>
      <Header
        component={headerComponent}
        subTitle={subTitle}
        title={title}
        variant={headerVariant}
      />
      <div className="mt-20 w-full">{children}</div>
    </main>
  )
}
export { Layout }
