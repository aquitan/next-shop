import { BuyLinks, CardSlider, ProductAdditionalInfo, ProductColor, Rating, Size, Tabs, Underline } from "@/components";
import styles from './ProductDetailed.module.scss'


const ProductDetailed = ({product}:any) => {
    return(
            <div className={styles.product}>
				<div className={styles.inner}>
					<div className={styles.slider}>
						<CardSlider imgs={product?.imgs} />
					</div>
					<div className={styles.info}>
						<h3 className={styles.title}>{product?.title}</h3>
						<div className={styles.price}>
							Цена: {product?.variant[0].price} &#8381;
						</div>
						<Rating />
						<div className={styles.volume}>Доступный объем:</div>
						<div className={styles.sizes}>
							{product?.variant.map((variant:any) => (
								<Size key={variant.size} size={variant.weight} measure={variant.size} isPicked={true} />
							))}
						</div>

						{
							product?.colors.length ?
								<ProductColor colors={product.colors} />
								: null
						}
						<BuyLinks url={product?.link} />
                        <ProductAdditionalInfo id={product?.id} categoryName={product?.categoryRu} />

						
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
				
			</div>
    )
}

export default ProductDetailed;