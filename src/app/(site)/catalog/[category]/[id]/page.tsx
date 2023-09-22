import styles from './page.module.scss'
import { Metadata } from 'next'
import Section from '@/components/section/Section'
import { productTest } from '../../../../../../mockData/productsData'
import ProductDetailed from '@/components/productDetailed/ProductDetailed'


type Props = {
	params: {
		id: string
	}
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
	const product = await getProduct(id)
	return {
		title: `Cargosil | ${product?.title}`,
		description: `Продукция Cargosil ${product?.title}`
	}
}

const getProduct = async (id: string) => {
	const el = productTest.find(item => (item.id === id))
	if (!el) {
		return
	}

	return el
}


const Product = async ({ params: { id } }: Props) => {
	const product = await getProduct(id)


	return (
		<Section>
			<ProductDetailed product={product} />
		</Section>
	)
}

export default Product;