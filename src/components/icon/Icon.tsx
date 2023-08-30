'use client'

import styles from './Icon.module.scss'
import Link from "next/link"
import { IconProps } from "./Icon.props"


export const Icon = ({ path, amount, children }: IconProps): JSX.Element => {
    return (
        <Link href={path} className={styles.icon}>
            {children}
            {amount && <span data-count={amount}></span>}
        </Link>
    )
}