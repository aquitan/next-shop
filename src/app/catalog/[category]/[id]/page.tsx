import styles from './page.module.scss'
import { Metadata } from 'next'
import { BuyLinks, CardSlider, ProductAdditionalInfo, ProductColor, Rating, Size, Tabs, Underline } from '@/components'
import { productTest } from '../../../../../mockData/productsData'
import { HTag } from '@/components/hTag/HTag'
import CatalogItem from '@/components/catalogItem/CatalogItem'
import Section from '@/components/section/Section'


type Props = {
	params: {
		id: string
	}
}

const catalogItems = [
	{ img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: 800, alt: 'Гидроизоляция летняя', currency: '₽', id: 1 },
	{ img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 2 },
	{ img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 3 },
	{ img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 4 },
]

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
	const product = await getProduct(id)
	return {
		title: `Cargosil | ${product.title}`,
		description: `Продукция Cargosil ${product.title}`
	}
}

const getProduct = async (id: string) => {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`)

	return res.json()
}


const Product = async ({ params: { id } }: Props) => {
	const product = await getProduct(id)

	console.log('product', product)

	return (
		<Section>
			<div className={styles.product}>
				<div className={styles.inner}>
					<div className={styles.slider}>
						<CardSlider />
					</div>
					<div className={styles.info}>
						<h3 className={styles.title}>{productTest[1].title}</h3>
						<div className={styles.price}>
							Цена: {productTest[1].price} &#8381;
						</div>
						<Rating />
						<div style={{ marginBottom: 10, color: '#9F9F9F' }}>Объем:</div>
						<div className={styles.sizes}>
							<Size size={3} measure='кг' isPicked={true} />
							<Size size={20} measure='кг' isPicked={false} />
						</div>

						<ProductColor colors={productTest[1].colors} />
						<BuyLinks />

						<Underline />
						<ProductAdditionalInfo />
					</div>
				</div>
				<Underline />
				<Tabs description={productTest[1].description} advantages={productTest[1].advantages} />
				<Underline />
				<HTag align='center' tag='h2'>Сопутствующие товары</HTag>
				<div className={styles.related}>
					{
						catalogItems.map((item: any) => (
							<CatalogItem key={item.id} alt={item.title} src={item.img} title={item.title} price={item.price} oldPrice={item.oldPrice} description={item.description} currency={item.currency} />
						))
					}
				</div>
			</div>
		</Section>
	)
}

export default Product;