import { Metadata } from "next"
import { productTest } from "../../../../../mockData/productsData"
import Section from "@/components/section/Section"
import CatalogItem from "@/components/catalogItem/CatalogItem"
import styles from './page.module.scss'
import { PageBanner } from "@/components"


type Props = {
	params: {
		category: string
	}
}

export const generateMetadata = async ({ params: { category } }: Props): Promise<Metadata> => {
	const el = await getProduct(category)
	if (el) {
		const categorieName = el[0].categoryRu

		return {
			title: `Cargosil | ${categorieName}`,
			description: `Продукция Cargosil ${categorieName}`
		}
	}

	return {
		title: `Cargosil | ${category}`,
		description: `Продукция Cargosil ${category}`
	}

}

const getProduct = async (category: string) => {
	const el = productTest.filter(item => (item.category === category))
	if (!el) {
		return
	}

	return el
}

const Category = async ({ params: { category } }: Props) => {
	const products = await getProduct(category)


	return (
		<>
			<PageBanner title={products ? products[0].categoryRu : 'Категория'} />
			<Section>
				<div className={styles.wrap}>
					{
						products?.map((item: any) => (
							<CatalogItem link={item.link} category={item.category} id={item.id} key={item.id} alt={item.title} src={item.imgs[0]} title={item.previewTitle} price={item.variant[0].price} description={item.description} currency={'₽'} />
						))
					}
				</div>
			</Section>
		</>
		
	)
}

export default Category;