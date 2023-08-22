import Link from 'next/link'
import styles from './ProductAdditionalInfo.module.scss'
import Ok from './ok.svg'
import Vk from './vk.svg'
import Yt from './yt.svg'

export const ProductAdditionalInfo = () => {
	return (
		<div className={styles.info}>
			<div className={styles.row}>
				<span className={styles.name}>Категория</span>
				<span>:</span>
				<span>Гидроизоляция</span>
			</div>
			<div className={styles.row}>
				<span className={styles.name}>Поделиться</span>
				<span>:</span>
				<span className={styles.socials}>
					<Link href=''>
						<Vk />
					</Link>
					<Link href=''>
						<Ok />
					</Link>
					<Link href=''>
						<Yt />
					</Link>
				</span>
			</div>
		</div>
	)
}