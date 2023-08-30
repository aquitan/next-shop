import Link from 'next/link'
import Ozon from './ozon.svg'
import styles from './BuyLinks.module.scss'

type BuyLinksProps = {
	url: string | undefined
}

export const BuyLinks = ({ url }: BuyLinksProps) => {
	return (
		<div className={styles.links}>
			<div className={styles.wrap}>
				<div className={styles.ozon}>
					<Link target="_blank" className={styles.link} href={url ? url : 'https://www.ozon.ru/brand/cargosil-83138512/?seller=448018'}>Купить на <Ozon /> </Link>
				</div>
			</div>
			<div className={styles.wrap}>
				+ Сравнить
			</div>
		</div>
	)
}