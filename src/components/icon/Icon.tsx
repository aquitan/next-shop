'use client'

import Image from "next/image"
import styles from './Icon.module.scss'
import Link from "next/link"
import { IconProps } from "./Icon.props"


export const Icon = ({ src, path, fill, width, height, alt, amount }: IconProps): JSX.Element => {
    return (
        <Link href={path} className={styles.icon}>
            <Image src={src} fill={fill} width={width} height={height} alt={alt} />
            {amount && <span data-count={amount}></span>}
        </Link>
    )
}