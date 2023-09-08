import styles from './CompareItem.module.scss'

type CompareItemProps = {
    characteristics: any[]
}

export const CompareItem = ({characteristics}:CompareItemProps) => {
    return(
        <div>
            
            <ul className={styles.list}>
                {
                    characteristics.map(item => (
                        <li className={styles.listItem}>
                            <div>{item.title}</div>
                            <div>{item.value}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}