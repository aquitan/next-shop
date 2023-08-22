'use client'

import { useState } from 'react'
import styles from './AuthToggle.module.scss'
import classNames from 'classnames/bind'

type AuthToggleProps = {
	setSwitched: (state: boolean) => void,
	switched: boolean
}

export const AuthToggle = ({ setSwitched, switched }: AuthToggleProps) => {


	const cx = classNames.bind(styles)

	const onChange = () => {
		setSwitched(switched)
	}

	return (
		<label htmlFor='toggle' className={styles.switch}>
			<input id='toggle' onChange={onChange} type="checkbox" />
			<div className={cx({ [styles.switched]: switched }, styles.toggle)}></div>
			<span>Вход</span>
			<span>Регистрация</span>
		</label>

	)
}