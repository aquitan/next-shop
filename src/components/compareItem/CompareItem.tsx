import Image from 'next/image'
import styles from './CompareItem.module.scss'

type CompareItemProps = {
    product: any
}

export const CompareItem = ({ product }: CompareItemProps) => {
    return(
        <div className={styles.wrap}>
            <Image src={product.imgs[0]} height={100} width={100} alt={product.title} />
            <ul className={styles.list}>
                {
                    product.characteristics.map((item: any) => (
                        <li className={styles.listItem}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.text}>{item.value}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}