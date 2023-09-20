'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'
import Submenu from "../submenu/Submenu"
import { useState } from "react"

type Props = {
    navLinks: NavLink[]
}

type NavLink = {
    label: string,
    href: string,
    submenu?: SubmenuType[]
}

type SubmenuType = {
    label: string,
    value: string
}

const Navigation = ({ navLinks }: any) => {
    const pathname = usePathname()
    const [active, setActive] = useState<true | false>(false)

    const onShow = (submenu: any) => {
        if (submenu) {
            setActive(true)
        }
    }

    const onHide = () => {
        setActive(false)
    }

    return (
        <nav className={styles.nav}>

            {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href ? styles.active : ''

                return <div onMouseLeave={onHide} onMouseEnter={() => onShow(link.submenu)} className={styles.navItem} key={link.label}>
                    <Link className={`${styles.link} ${isActive}`} href={link.href}>
                        {link.label}
                    </Link>
                    {
                        link?.submenu ? <Submenu active={active} submenu={link?.submenu} /> : null
                    }
                </div>
            })}
        </nav>
    )
}

export default Navigation;