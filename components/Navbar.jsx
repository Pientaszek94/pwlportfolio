import styles from './Navbar.module.scss'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navcon}>
                    <div className={styles.logocon}>
                            <div className={styles.logo}>
                                <h1 className={styles.logoh1}>PWL</h1>
                                <h4 className={styles.logosub}>FrontDev</h4>
                            </div>
        
                    </div>

        </div>
    </nav>
  )
}
