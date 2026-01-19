import Navbar from '../Navbar'
import styles from './styles.module.css'

type Props = {
  title?: string
  subTitle?: string
  variant?: 'home' | 'custom'
  component?: React.ReactNode
}

export const Header: React.FC<Props> = ({
  title = 'Dashboard',
  subTitle,
  variant,
  component,
}) => {
  return (
    <header className={styles.header}>
      <Navbar
        component={component}
        subtitle={subTitle}
        title={title}
        variant={variant}
      />
    </header>
  )
}
