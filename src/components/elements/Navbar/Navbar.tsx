import ICONS from '@configs/icons'
import IMAGES from '@configs/images'
import { clearStorage } from '@storage/index'

import styles from './styles.module.css'

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
  const handleSingOut = () => {
    clearStorage()
    window.location.href = '/login'
  }

  if (variant === 'home') {
    return (
      <nav className={styles.navbar}>
        <div className="flex items-center space-x-4">
          <img
            alt="logo"
            className="bg-primary-3 w-14 h-14 object-cover rounded-lg"
            src={IMAGES.RestoLogo}
          />
          <div className={styles.title}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>

        <button className={styles.navMenu} onClick={handleSingOut}>
          <ICONS.SingOut />
        </button>
      </nav>
    )
  }

  return <nav className={styles.navbar}>{component}</nav>
}

export { Navbar }
