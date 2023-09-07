import Image from "next/image";
import styles from './MainSliderItem.module.scss'
import Button from "../button/Button";

type Props = {
	src: string,
	alt: string,
	text: string,
	title: string,
	link: string
}

const MainSlideItem = ({ src, alt, text, title, link }: Props) => {
	return (
		<div className={styles.slide}>
			<Image className={styles.img} src={src} width={1200} height={500} alt={alt} />
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p>{text}</p>
				<Button link={link} color='ghost' >Подробнее</Button>
			</div>
		</div>
	)
}

export default MainSlideItem;