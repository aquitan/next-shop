import { FilterControls } from '../filterControls/FilterControls'
import styles from './Filter.module.scss'

export const Filter = () => {
	return (
		<div className={styles.controls}>
			<FilterControls />
		</div>
	)
}