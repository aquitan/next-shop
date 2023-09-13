import styles from './page.module.scss'
import { Metadata } from 'next'
import { BuyLinks, CardSlider, ProductAdditionalInfo, ProductColor, Rating, Size, Tabs, Underline } from '@/components'
import { HTag } from '@/components/hTag/HTag'
import Section from '@/components/section/Section'
import { productTest } from '../../../../../../mockData/productsData'


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
			<div className={styles.product}>
				<div className={styles.inner}>
					<div className={styles.slider}>
						<CardSlider imgs={product?.imgs} />
					</div>
					<div className={styles.info}>
						<h3 className={styles.title}>{product?.title}</h3>
						<div className={styles.price}>
							Цена: от {product?.variant[0].price} &#8381;
						</div>
						<Rating />
						<div style={{ marginBottom: 10, color: '#9F9F9F' }}>Объем:</div>
						<div className={styles.sizes}>
							{product?.variant.map(variant => (
								<Size key={variant.size} size={variant.weight} measure={variant.size} isPicked={true} />
							))}
						</div>

						{
							product?.colors.length ?
								<ProductColor colors={product.colors} />
								: null
						}
						<BuyLinks url={product?.link} />

						<Underline />
						<ProductAdditionalInfo categoryName={product?.categoryRu} />
					</div>
				</div>
				<Underline />
				<Tabs
					description={product?.description}
					advantages={product?.advantages}
					spheres={product?.spheres}
					preparation={product?.preparation}
					application={product?.application}
					packaging={product?.packaging}
					expirationDate={product?.expirationDate}
					consumption={product?.consumption}
					instrumentCleaning={product?.instrumentCleaning}
					content={product?.content}
					safety={product?.safety}
					attention={product?.attention}
					characteristics={product?.characteristics}
				/>
				<Underline />
				<HTag align='center' tag='h2'>Сопутствующие товары</HTag>
				{/* <div className={styles.related}>
					{
						catalogItems.map((item: any) => (
							<CatalogItem category={item.category} id={item.id} key={item.id} alt={item.title} src={item.img} title={item.title} price={item.price} oldPrice={item.oldPrice} description={item.description} currency={item.currency} />
						))
					}
				</div> */}
			</div>
		</Section>
	)
}

export default Product;