import FilterIcon from './filter.svg'
import CardsRowIcon from './cardsRow.svg'
import CardsGridIcon from './cardsGrid.svg'
import styles from './FilterControls.module.scss'
import { FilterControlsProps } from './FilterControls.props'

export const FilterControls = ({ length }: FilterControlsProps) => {
	return (
		<div className={styles.controls}>
			<div className={styles.icons}>
				<span className={styles.icon}>
					<FilterIcon />
					<span>Фильтр</span>
				</span>
				<span className={styles.icon}>
					<CardsRowIcon />
				</span>
				<span className={styles.icon}>
					<CardsGridIcon />
				</span>
			</div>
			<div className={styles.count}>
				{length} из {length} товаров
			</div>
		</div>
	)
}