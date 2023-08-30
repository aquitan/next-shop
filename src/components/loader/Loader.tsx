import styles from './Loader.module.css'
import classNames from 'classnames/bind'

export const Loader = () => {
	const cx = classNames.bind(styles)

	return (
		<figure className={styles.figure}>
			<div className={cx(styles.dot, styles.white)}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
		</figure>
	)
}