import NavBar from "./NavBar";
import styles from '../../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <NavBar />
        </div>
    )
}

export default Header;