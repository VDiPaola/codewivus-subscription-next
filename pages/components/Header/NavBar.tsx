import styles from '../../../styles/Header.module.css'
import Logo from '../../../public/logo.png'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.LogoWrapper}>
                <img src={Logo.src} className={styles.Logo} />
            </div>
        </div>
    )
}

export default NavBar;