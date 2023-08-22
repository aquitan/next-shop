import styles from './MenuBtn.module.scss'
import classNames from 'classnames/bind'


type BurgerMenuProps = {
	onClick: () => void,
	open: boolean
}

export const BurgerMenu = ({ onClick, open }: BurgerMenuProps) => {
	const cx = classNames.bind(styles)

	return (
		<div onClick={onClick} className={cx({ [styles.open]: open }, styles.menu)}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}