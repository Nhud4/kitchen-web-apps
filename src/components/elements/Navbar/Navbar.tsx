import styles from './styles.module.css'
import ICONS from '@configs/icons'

type Props = {
  title?: string
  subtitle?: string
  variant?: 'home' | 'custom'
  component?: React.ReactNode
}

const Navbar: React.FC<Props> = ({
  component,
  title = 'Dasboard',
  subtitle,
  variant = 'home',
}) => {
  if (variant === 'home') {
    return (
      <nav className={styles.navbar}>
        <ICONS.Logo />
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </nav>
    )
  }

  return <nav className={styles.navbar}>{component}</nav>
}

export { Navbar }
