'use client'

import Link from 'next/link'
import Ozon from './ozon.svg'
import Market from './market.svg'
import styles from './BuyLinks.module.scss'
import { useCompare } from '../../../store'
import { productTest } from '../../../mockData/productsData'

type BuyLinksProps = {
	url: string | undefined,
	id: string | undefined
}

export const BuyLinks = ({ url, id }: BuyLinksProps) => {
	const addProduct = useCompare((state) => state.addProduct)

	const addCompare = () => {
		addProduct(id, productTest)
	}

	return (
		<div className={styles.links}>
			<div className={styles.wrap}>
				<div className={styles.ozon}>
					<Link target="_blank" className={styles.link} href={url ? url : 'https://www.ozon.ru/brand/cargosil-83138512/?seller=448018'}>Купить на <Ozon /> </Link>
				</div>

			</div>
			<div className={styles.wrap}>
				<div className={styles.ozon}>
					<Link target="_blank" className={styles.link} href={url ? url : 'https://www.ozon.ru/brand/cargosil-83138512/?seller=448018'}>Купить на <Market /> </Link>
				</div>
			</div>

			<div onClick={addCompare} className={styles.wrap}>
				+ Сравнить
			</div>
		</div>
	)
}