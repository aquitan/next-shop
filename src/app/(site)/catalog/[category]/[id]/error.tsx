'use client'

import Section from "@/components/section/Section";
import styles from './page.module.scss'
import Link from "next/link";

const ProductError = ({ error }: { error: Error }) => {
	console.log('error', error)

	return (
		<Section>
			<div className={styles.error}>
				<h1>Ошибка 404</h1>
				<div>
					<Link href='/'>На главную</Link>
				</div>
			</div>
		</Section>
	)
}

export default ProductError;