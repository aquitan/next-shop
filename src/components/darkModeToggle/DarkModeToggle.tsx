'use client'

import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import styles from './DarkModeToggle.module.css'
import Moon from './moon.svg'
import Sun from './sun.svg'
import classNames from 'classnames/bind'


const DarkModeToggle = (): JSX.Element => {
	const { value, changeMode } = useContext(ThemeContext)

	const cx = classNames.bind(styles)


	return (
		<div className={cx(styles.container, { [styles.dark]: value, [styles.light]: !value })} onClick={changeMode}>
			<div className={styles.ball}>
				{
					value ? <Moon /> : <Sun />
				}
			</div>
		</div>
	)
}

export default DarkModeToggle