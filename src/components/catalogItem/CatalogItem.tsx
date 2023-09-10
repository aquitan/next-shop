'use client'

import Image from "next/image";
import styles from './CatalogItem.module.scss'
import CatalogItemShares from "../catalogItemShares/CatalogItemShares";
import { useState } from "react";
import Link from "next/link";
import classNames from "classnames/bind";

type Props = {
	src: string,
	title: string,
	description: string,
	price: string,
	oldPrice?: string,
	alt: string,
	currency: string,
	id: string,
	category: string,
	horizontal?: boolean
}

const CatalogItem = ({ src, title, description, price, oldPrice, alt, id, currency, category, horizontal }: Props) => {
	const [isHover, setIsHover] = useState<boolean>(false)

	const cx = classNames.bind(styles)



	const mouseEnterHandler = () => {
		setIsHover(true)
	}

	const mouseLeaveHandler = () => {
		setIsHover(false)
	}

	return (
		<div className={cx(styles.card, { [styles.horizontal]: horizontal })} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>

			<div className={styles.image}>
				<CatalogItemShares id={id} isHover={isHover} />
				<Image className={styles.img} src={src} alt={alt} width={200} height={300} />
			</div>
			<div className={styles.info}>
				<div className={styles.title}>
					<Link href={`/catalog/${category}/${id}`}>{title}</Link>
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