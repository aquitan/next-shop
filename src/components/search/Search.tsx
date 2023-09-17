import { ReactNode } from "react"
import styles from './Search.module.scss'
import classNames from "classnames/bind"


type SearchProps = {
	children: ReactNode,
	active: boolean
}

export const Search = ({ children, active }: SearchProps) => {
	const cx = classNames.bind(styles)


	return (
		<div className={cx(styles.search, { [styles.active]: active })}>
			<input type='search' placeholder='Поиск' />
			{children}
		</div>
	)
}