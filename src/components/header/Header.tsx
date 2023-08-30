import Navigation from "../navigation/Navigation";
import styles from './Header.module.css'
import HeaderControls from "../headerControls/HeaderControls";
import { Logo } from "../logo/Logo";
import { Sidebar } from "../sidebar/Sidebar";

const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'О Компании', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Блог', href: '/blog' },
    { label: 'Галерея', href: '/gallery' },
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
            <Sidebar />
        </>
    )
}

export default Header;