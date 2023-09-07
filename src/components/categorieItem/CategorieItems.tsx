import Image from "next/image"
import styles from './CategorieItem.module.scss'
import Link from "next/link"

type Props = {
	src: string,
	alt: string,
	title: string,
	link: string
}

const CategorieItem = ({ src, alt, title, link }: Props) => {
	return (
		<Link href={link} className={styles.wrap}>
			<Image className={styles.img} width={200} height={300} src={src} alt={alt} />
			<div className={styles.title}>
				{title}
			</div>
		</Link>
	)
}

export default CategorieItem;