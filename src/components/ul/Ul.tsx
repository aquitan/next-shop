import { UlProps } from "./Ul.props"
import styles from './Ul.module.scss'

export const Ul = ({ list }: UlProps) => {
	return (
		<ul className={styles.ul}>
			{list?.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	)
}