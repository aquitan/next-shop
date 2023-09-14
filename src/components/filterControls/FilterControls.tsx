import FilterIcon from './filter.svg'
import CardsRowIcon from './cardsRow.svg'
import CardsGridIcon from './cardsGrid.svg'
import styles from './FilterControls.module.scss'
import classNames from 'classnames/bind'
import { FilterControlsProps } from './FilterControls.props'

export const FilterControls = ({ length, horizontal, onRowDirection, onColumnDirection }: FilterControlsProps) => {
	const cx = classNames.bind(styles)


	return (
		<div className={styles.controls}>
			<div className={styles.icons}>
				{/* <span className={styles.icon}>
					<FilterIcon />
					<span>Фильтр</span>
				</span> */}
				<span onClick={onRowDirection} className={cx(styles.icon, { [styles.horizontal]: horizontal }, styles.horisontalIcon)}>
					<CardsRowIcon />
				</span>
				<span onClick={onColumnDirection} className={cx(styles.icon, { [styles.horizontal]: !horizontal })}>
					<CardsGridIcon />
				</span>
			</div>
			<div className={styles.count}>
				{length} из {length} товаров
			</div>
		</div>
	)
}