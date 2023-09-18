'use client'

import { MouseEvent, useEffect, useMemo, useState } from "react"
import styles from './Search.module.scss'
import classNames from "classnames/bind"
import { productTest } from "../../../mockData/productsData"
import { SearchItem } from "../searchItem/SearchItem"


type SearchProps = {
	active: boolean,
	setActive?: (state:any) => any
}

export const Search = ({ active, setActive }: SearchProps) => {
	const cx = classNames.bind(styles)

	const [query, setQuery] = useState('')


	const filteredItems = useMemo(() => {
		return productTest.filter(item => (
			item.title.toLowerCase().includes(query.toLowerCase())
		))
	}, [query])

	useEffect(() => {
		setQuery('')
	}, [active])


	const onSearchClick = (e:MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		if (setActive) {
			setActive((state:any) => !state)
		}	
	}

	return (
		<div onClick={onSearchClick} className={cx(styles.search, { [styles.active]: active })}>
			<div onClick={(e:MouseEvent<HTMLDivElement>) => e.stopPropagation()} className={styles.inner}>
				<input className={styles.input} value={query} onChange={e => setQuery(e.target.value)} type='search' placeholder='Поиск' />
				{
					query.length > 1 ?
					filteredItems.map(fItem => {
						return <SearchItem title={fItem.title} id={fItem.id} src={fItem.imgs[0]} categorie={fItem.category} />
					}) : null
				}
			</div>
		</div>
	)
}