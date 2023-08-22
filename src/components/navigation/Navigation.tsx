'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

type Props = {
    navLinks: NavLink[]
}

type NavLink = {
    label: string,
    href: string
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>

            {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href ? styles.active : ''

                return <Link className={`${styles.link} ${isActive}`} key={link.label} href={link.href}>{link.label}</Link>
            })}
        </nav>
    )
}

export default Navigation;