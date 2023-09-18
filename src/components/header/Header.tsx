'use client'

import Navigation from "../navigation/Navigation";
import styles from './Header.module.css'
import HeaderControls from "../headerControls/HeaderControls";
import { Logo } from "../logo/Logo";
import { Search } from "../search/Search";
import { useMemo, useState } from "react";
import { productTest } from "../../../mockData/productsData";

const navLinks = [
    { label: 'Главная', href: '/' },
    { label: 'О Компании', href: '/about' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contacts' },
]


const Header = () => {
    const [active, setActive] = useState(false)
    const [query, setQuery] = useState('')


	const filteredItems = useMemo(() => {
		return productTest.filter(item => (
			item.title.toLowerCase().includes(query.toLowerCase())
		))
	}, [query])
    

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.inner} ${styles.container}`}>
                    <Logo />
                    <Navigation navLinks={navLinks} />
                    <HeaderControls setActive={setActive} active={active} />
                </div>
            </header>
            <Search setActive={setActive} setQuery={setQuery} query={query} active={active} filteredItems={filteredItems} />
        </>
    )
}

export default Header;