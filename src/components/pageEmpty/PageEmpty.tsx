import { HTag } from "../hTag/HTag"
import styles from './PageEmpty.module.scss'
import Link from "next/link"

export const PageEmpty = () => {
    return(
        <div className={styles.wrap}>
            <HTag size="xl" weight="light" tag="h2">Добавьте товары для сравнения</HTag>
            <Link className={styles.link} href='/catalog'>Перейти в каталог</Link>
        </div>
    )
}