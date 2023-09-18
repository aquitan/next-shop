'use client'

import { MouseEvent, useMemo, useState } from "react"
import styles from './Search.module.scss'
import classNames from "classnames/bind"
import { productTest } from "../../../mockData/productsData"
import { SearchItem } from "../searchItem/SearchItem"


type SearchProps = {
	active: boolean,
	setActive: (state:any) => any,
	query: string,
	setQuery: (value:string) => void,
	filteredItems: any[]
}

export const Search = ({ active, setActive, setQuery, query, filteredItems }: SearchProps) => {
	const cx = classNames.bind(styles)




	const onSearchClick = (e:MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		setActive((state:any) => !state)
		setQuery('')
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