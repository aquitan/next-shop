import Star from './star.svg'
import styles from './Rating.module.css'

export const Rating = (): JSX.Element => {
	return (
		<div className={styles.rating}>
			<div>
				<Star />
				<Star />
				<Star />
				<Star />
				<Star />
			</div>
			<div className={styles.votes}>
				0 голосов
			</div>
		</div>
	)
}