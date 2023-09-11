'use client'

import { useState } from "react"
import { FilterControls } from "../filterControls/FilterControls"
import HomeProducts from "../homeProducts/HomeProducts"
import Section from "../section/Section"

export const CatalogContainer = ({ products }: any) => {
	const [isHorizontal, setIsHorizontal] = useState<true | false>(false)

	const onRowDirection = () => {
		setIsHorizontal(true)
	}

	const onColumnDirection = () => {
		setIsHorizontal(false)
	}



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
				<HomeProducts horizontal={isHorizontal} products={products} />
			</Section>
		</>
	)
}