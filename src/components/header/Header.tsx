'use client'

import Navigation from "../navigation/Navigation";
import styles from './Header.module.scss'
import HeaderControls from "../headerControls/HeaderControls";
import { Logo } from "../logo/Logo";
import { Search } from "../search/Search";
import { useState } from "react";

const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О Компании', href: '/about' },
    {
        label: 'Каталог', href: '/catalog', submenu: [
            { label: 'Мастики', value: 'mastiki' },
            { label: 'Антикоры', value: 'antikory' },
            { label: 'Смазки', value: 'smazki' },
            { label: 'Масла', value: 'masla' },
            { label: 'Силиконы', value: 'silikony' },
            { label: 'Чернители', value: 'cherniteli' },
        ]
    },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contacts' },
]


const Header = () => {
    const [active, setActive] = useState(false)
    

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.inner} ${styles.container}`}>
                    <Logo />
                    <div className={styles.navs}>
                        <Navigation navLinks={navLinks} />
                        <HeaderControls setActive={setActive} active={active} />
                    </div>

                </div>
            </header>
            <Search setActive={setActive} active={active} />
        </>
    )
}

export default Header;