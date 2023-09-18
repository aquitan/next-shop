import Image from "next/image"
import Link from "next/link"
import styles from './SearchItem.module.scss'

type SearchItemProps = {
    title: string,
    src: string,
    id: string,
    categorie: string
}

export const SearchItem = ({title, src, id, categorie}:SearchItemProps) => {
    return(
        <div className={styles.item}>
            <div className={styles.inner}>
                <Image src={src} width={80} height={80} alt={title}/>
                <div>
                    {title}
                </div>
            </div>
            <Link className={styles.link} href={`/catalog/${categorie}/${id}`}>
                Подробнее
            </Link>
        </div>
    )
}