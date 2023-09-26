'use client'

import { useEffect, useState } from "react"
import { FilterControls } from "@/components/filterControls/FilterControls"
import HomeProducts from "@/components/homeProducts/HomeProducts"
import Section from "@/components/section/Section"
import styles from './CatalogContainer.module.scss'
import Select from "@/components/select/Select"

export const CatalogContainer = ({ products }: any) => {
	const [isHorizontal, setIsHorizontal] = useState<true | false>(false)
	const [select, setSelect] = useState<string>('')

	const onRowDirection = () => {
		setIsHorizontal(true)
	}

	const onColumnDirection = () => {
		setIsHorizontal(false)
	}

	const options = [
		{ label: 'Все', value: '' },
		{ label: 'Мастики', value: 'mastiki' },
		{ label: 'Антикоры', value: 'antikory' },
		{ label: 'Смазки', value: 'smazki' },
		{ label: 'Масла', value: 'masla' },
		{ label: 'Силиконы', value: 'silikony' },
		{ label: 'Чернители', value: 'cherniteli' },
	]

	const changeCategory = () => {
		if (select) {
			const arr = products.filter((item: any) => item.category === select)
			return arr
		}

		return products
	}

	useEffect(() => {
		changeCategory()
	}, [select])



	return (
		<>
			<Section wide="wide" bg="bg">
				<FilterControls
					onRowDirection={onRowDirection}
					onColumnDirection={onColumnDirection}
					horizontal={isHorizontal}
					length={products.length} />
			</Section>

			<Section>
				<div className={styles.wrap}>
					<div className={styles.filter}>
						<div className={styles.title}>Выбери категорию:</div>
						<Select setSelect={setSelect} options={options} />
					</div>
					<HomeProducts horizontal={isHorizontal} products={changeCategory()} />
				</div>
			</Section>
		</>
	)
}