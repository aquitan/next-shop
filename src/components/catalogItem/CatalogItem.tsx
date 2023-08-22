'use client'

import Image from "next/image";
import styles from './CatalogItem.module.scss'
import CatalogItemShares from "../catalogItemShares/CatalogItemShares";
import { useState } from "react";
import Link from "next/link";

type Props = {
	src: string,
	title: string,
	description: string,
	price: string,
	oldPrice?: string,
	alt: string,
	currency: string
}

const CatalogItem = ({ src, title, description, price, oldPrice, alt, currency }: Props) => {
	const [isHover, setIsHover] = useState<boolean>(false)


	const mouseEnterHandler = () => {
		setIsHover(true)
	}

	const mouseLeaveHandler = () => {
		setIsHover(false)
	}

	return (
		<div className={styles.card} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>

			<div className={styles.image}>
				<CatalogItemShares isHover={isHover} />
				<Image src={src} alt={alt} width={200} height={300} />
			</div>
			<div className={styles.info}>
				<div className={styles.title}>
					<Link href='/catalog/maslo/1'>{title}</Link>
				</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>
					<span>Цена:</span>
					<div>
						<span className={styles.current}>{price} {currency}</span>
						<span className={styles.old}>{oldPrice} {oldPrice ? currency : null}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogItem;