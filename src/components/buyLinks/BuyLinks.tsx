import Link from 'next/link'
import Ozon from './ozon.svg'
import styles from './BuyLinks.module.scss'

export const BuyLinks = () => {
	return (
		<div className={styles.links}>
			<div className={styles.wrap}>
				<div className={styles.ozon}>
					<Link className={styles.link} href=''>Купить на <Ozon /> </Link>
				</div>
			</div>
			<div className={styles.wrap}>
				+ Сравнить
			</div>
		</div>
	)
}