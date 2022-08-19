import styles from './Navbar.module.scss'
import Logo from './parts/Logo'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
          <Logo/>
    </nav>
  )
}
