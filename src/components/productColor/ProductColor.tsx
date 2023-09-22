import classNames from "classnames/bind"
import { Color, ProductColorProps } from "./ProductColor.props"
import styles from './ProductColor.module.scss'

export const ProductColor = ({ colors }: ProductColorProps) => {
	const cs = classNames.bind(styles)

	return (
		<div className={styles.wrap}>
			<div className={styles.title}>Доступный цвет:</div>
			<div className={styles.colors}>
				{
					colors.map((item: Color) => (
						<div key={item.color} title={item.name} className={cs('color', item.color, { [styles.picked]: item.isPicked })}></div>
					))
				}
			</div>
		</div>
	)
}