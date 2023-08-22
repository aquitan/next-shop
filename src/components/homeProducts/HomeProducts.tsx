import { ReactNode } from "react";
import styles from './HomeProducts.module.scss'

type Props = {
	children: ReactNode,
	title?: string
}

const HomeProducts = ({ children, title }: Props) => {
	return (
		<>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div className={styles.wrap}>
				{children}
			</div>
		</>
	)
}

export default HomeProducts;