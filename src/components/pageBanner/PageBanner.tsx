import { PageBannerProps } from "./PageBanner.props"
import styles from './PageBanner.module.scss'
import Image from "next/image"

export const PageBanner = ({ title }: PageBannerProps) => {
	return (
		<div className={styles.banner}>
			<Image width={1920} height={380} className={styles.image} src="/page-banner.png" alt="" />
			<div className={styles.title}>{title}</div>
		</div>
	)
}