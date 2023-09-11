import { HTag } from "../hTag/HTag"
import styles from './PageEmpty.module.scss'
import Link from "next/link"


type PageEmptyType = {
    page: string
}

export const PageEmpty = ({page}:PageEmptyType) => {
    return(
        <div className={styles.wrap}>
            <HTag size="xl" weight="light" tag="h2">Добавьте товары для {page}</HTag>
            <Link className={styles.link} href='/catalog'>Перейти в каталог</Link>
        </div>
    )
}