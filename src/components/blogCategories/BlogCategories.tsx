import { HTag } from '../hTag/HTag'
import styles from './BlogCategories.module.scss'

export const BlogCategories = () => {
	return (
		<div className={styles.categories}>
			<HTag tag='h2' size='m' weight='light'>Категории</HTag>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div>Автохимия</div>
					<div>1</div>
				</li>
				<li className={styles.item}>
					<div>Масло</div>
					<div>2</div>
				</li>
				<li className={styles.item}>
					<div>Смазка</div>
					<div>1</div>
				</li>
				<li className={styles.item}>
					<div>Мастика</div>
					<div>3</div>
				</li>
			</ul>
		</div>
	)
}