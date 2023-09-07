import Image from "next/image"
import { RecentPostProps } from "./RecentPost.props"
import styles from './RecentPost.module.css'
import Link from "next/link"

export const RecentPost = ({ title, date, img, }: RecentPostProps) => {
	return (
		<Link href={'/blog/post'} className={styles.post}>
			<Image className={styles.img} src={img} height={80} width={80} alt="" />
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className={styles.date}>{date}</div>
			</div>
		</Link>
	)
}