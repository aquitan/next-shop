'use client'

import Button from '../customButton/CustomButton'
import styles from './CatalogItemShares.module.scss'
import Compare from './icons/compare.svg'
import Share from './icons/share.svg'
import Like from './icons/like.svg'
import { useCompare, useFavourites } from '../../../store'
import { shallow } from 'zustand/shallow'
import { productTest } from '../../../mockData/productsData'

type Props = {
	isHover: boolean,
	id: string
}

const CatalogItemShares = ({ isHover, id }: Props): JSX.Element => {
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
				<Button color={'cart'} link='https://www.ozon.ru/category/avtotovary-8500/elastomeric-systems-100139746/?category_was_predicted=true&deny_category_prediction=true&from_global=true&seller=448018&text=cargosil'>Купить</Button>
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