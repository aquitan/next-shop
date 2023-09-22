'use client'

import Link from 'next/link'
import styles from './ProductAdditionalInfo.module.scss'
import Vk from './vk.svg'
import Yt from './yt.svg'
import Fav from './fav.svg'
import { useCompare, useFavourites } from '../../../store'
import { productTest } from '../../../mockData/productsData'

type ProductAdditionalInfoProps = {
	categoryName: string | undefined,
	id: string | undefined
}

export const ProductAdditionalInfo = ({ categoryName, id }: ProductAdditionalInfoProps) => {
	const addFavv = useFavourites((state) => state.addFav)

	const addCompare = () => {
		addFavv(id, productTest)
	}


	return (
		<div className={styles.info}>
			<div className={styles.row}>
				<span className={styles.name}>Категория</span>
				<span>:</span>
				<span>{categoryName ? categoryName : '...'}</span>
			</div>
			<div className={styles.row}>
				<span onClick={addCompare} className={styles.name}>
					<Fav />
				</span>
				<span>|</span>
				<span className={styles.socials}>
					<Link target='_blank' href='https://vk.com/cargosil48'>
						<Vk />
					</Link>
					<Link target='_blank' href='https://www.youtube.com/@elastomeric'>
						<Yt />
					</Link>
				</span>
			</div>
		</div>
	)
}