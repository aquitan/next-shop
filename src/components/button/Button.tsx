'use client'

import Link from 'next/link'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode,
	link?: string,
	type?: 'submit' | 'reset' | 'button',
	color?: string,
	onClick?: () => void
}

const Button = ({ children, link, type, color, onClick }: Props) => {
	const cx = classNames.bind(styles)
	const classes = cx('btn', type, color)

	if (link) {
		return <Link target='_blank' href={link} className={classes}>{children}</Link>
	}


	return (
		<button onClick={onClick} type={type} className={classes}>{children}</button>
	)
}

export default Button;