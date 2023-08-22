import { SizeProps } from "./Size.props"
import styles from './Size.module.scss'
import classNames from "classnames/bind"

export const Size = ({ size, measure, isPicked }: SizeProps): JSX.Element => {
	const cs = classNames.bind(styles)


	return (
		<div className={cs('size', { [styles.picked]: isPicked })}>
			{size} {measure}
		</div>
	)
}