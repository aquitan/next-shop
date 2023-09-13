'use client'

import Link from 'next/link'
import styles from './Sidebar.module.css'
import HmeIcon from './home-icon.svg'
import CatalogIcon from './catalog-icon.svg'
import AboutIcon from './about-icon.svg'
import ContactsIcon from './contacts-icon.svg'
import BlogIcon from './blog-icon.svg'
import { Logo } from '../logo/Logo'
import { Input } from '../input/Input'
import classNames from 'classnames/bind'
import { BurgerMenu } from '../burgerMenu/BurgerMenu'
import { useState } from 'react'

export const Sidebar = () => {
	const cx = classNames.bind(styles)
	const [open, setOpen] = useState<true | false>(false)

	const openMenu = () => {
		setOpen(state => !state)
	}


	return (
		<div className={cx({ [styles.open]: open }, styles.wrapper)}>
			<BurgerMenu open={open} onClick={openMenu} />
			<div className={styles.sidebar}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<Input className={'search'} placeholder='Поиск' type='search' name='search' />
				<div className={styles.item}>
					<HmeIcon />
					<Link onClick={openMenu} href='/'>Главаная</Link>
				</div>
				<div className={styles.item}>
					<CatalogIcon />
					<Link onClick={openMenu} href='/catalog'>Каталог</Link>
				</div>
				<div className={styles.item}>
					<AboutIcon />
					<Link onClick={openMenu} href='/about'>О компании</Link>
				</div>
				<div className={styles.item}>
					<ContactsIcon />
					<Link onClick={openMenu} href='/contacts'>Контакты</Link>
				</div>
				<div className={styles.item}>
					<BlogIcon />
					<Link onClick={openMenu} href='/blog'>Блог</Link>
				</div>
			</div>
		</div>
	)
}