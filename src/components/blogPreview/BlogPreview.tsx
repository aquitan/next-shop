import Image from "next/image"
import { BlogPreviewProps } from "./BlogPreview.props"
import { HTag } from "../hTag/HTag"
import styles from './BlogPreview.module.scss'
import AuthorIcon from './author-icon.svg'
import DateIcon from './date-icon.svg'
import CategoryIcon from './category-icon.svg'
import Link from "next/link"

export const BlogPreview = ({ description, author, date, category, title, img, id }: BlogPreviewProps): JSX.Element => {
	return (
		<div className={styles.post}>
			<Image className={styles.img} src={img} width={800} height={500} alt='' />
			<div className={styles.info}>
				<div className={styles.item}><AuthorIcon /> {author}</div>
				<div className={styles.item}><DateIcon /> {date}</div>
				<div className={styles.item}><CategoryIcon /> {category}</div>
			</div>
			<HTag tag='h2' >{title}</HTag>
			<div className={styles.description}>{description}</div>
			<Link className={styles.read} href={`/blog/${id}`}>Читать</Link>
		</div>
	)
}