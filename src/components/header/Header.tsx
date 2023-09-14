import Navigation from "../navigation/Navigation";
import styles from './Header.module.css'
import HeaderControls from "../headerControls/HeaderControls";
import { Logo } from "../logo/Logo";

const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О Компании', href: '/about' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contacts' },
]


const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.inner} ${styles.container}`}>
                    <Logo />
                    <Navigation navLinks={navLinks} />
                    <HeaderControls />
                </div>
            </header>
            
        </>
    )
}

export default Header;