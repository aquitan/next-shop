'use client'

import Button from '../button/Button'
import styles from './CatalogItemShares.module.scss'
import Compare from './icons/compare.svg'
import Share from './icons/share.svg'
import Like from './icons/like.svg'
import { useCompare, useFavourites } from '../../../store'
import { shallow } from 'zustand/shallow'
import { productTest } from '../../../mockData/productsData'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type Props = {
	isHover: boolean,
	id: string,
	link: Url
}

const CatalogItemShares = ({ isHover, id, link }: Props): JSX.Element => {
	const addProduct = useCompare((state) => state.addProduct)
	const addFav = useFavourites((state) => state.addFav)



	const addToCompare = () => {
		addProduct(id, productTest)
	}
	const addToFavourites = () => {
		addFav(id, productTest)
	}

	return (
		<div className={`${styles.shares} ${isHover ? styles.hover : ''}`}>
			<div className={styles.shares__inner}>
				<Link target='_blank' className={styles.link} href={link}>Купить</Link>
				<div className={styles.shares__actions}>
					<div onClick={addToFavourites} className={styles.shares__actions__item}>
						<Like />
					</div>
					<div onClick={addToCompare} className={styles.shares__actions__item}>
						<Compare />
					</div>
					<div className={styles.shares__actions__item}>
						<Share />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogItemShares;