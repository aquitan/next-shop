import { ReactNode } from "react";
import styles from './HomeCategories.module.scss'
import Section from "../section/Section";

type Props = {
	children: ReactNode
}

const HomeCategories = ({ children }: Props) => {
	return (
		<Section>
			<>
				<h2 className={styles.title}>Категории товаров</h2>
				<div className={styles.catalog}>
					{children}
				</div>
			</>
		</Section>
	)
}

export default HomeCategories;