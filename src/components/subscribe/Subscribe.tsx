'use client'

import styles from './Subscribe.module.scss'


const Subscribe = () => {
    return (
        <form>
            <input className={styles.input} type="email" placeholder='Введи почту' />
            <button className={styles.btn}>Подпишись</button>
        </form>
    )
}

export default Subscribe;