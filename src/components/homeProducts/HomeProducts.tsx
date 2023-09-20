'use client'

import styles from './HomeProducts.module.scss'
import CatalogItem from "../catalogItem/CatalogItem";
import { useState } from 'react';
import Button from '../button/Button';
import classNames from 'classnames/bind';
import { HTag } from '..';

type Props = {
	products: any,
	title?: string,
	horizontal?: boolean
}

const HomeProducts = ({ products, title, horizontal }: Props) => {
	const items = 8
	const [itemsToShow, setItemsToShow] = useState<number>(items)

	const cx = classNames.bind(styles)

	const showMore = () => {
		setItemsToShow(prev => {
			if (prev !== products.length) {
				return products.length
			}
			return items
		})
	}

	return (
		<>
			{title && <HTag tag='h2' size='xl' weight='light'>{title}</HTag>}
			<div className={cx(styles.wrap, { [styles.horizontal]: horizontal })}>
				{
					products.slice(0, itemsToShow).map((item: any) => (
						<CatalogItem link={item.link} horizontal={horizontal} category={item.category} id={item.id} key={item.id} alt={item.title} src={item.imgs[0]} title={item.previewTitle} price={item.variant[0].price} oldPrice={item.oldPrice} description={item.description} currency={'₽'} />
					))
				}
			</div>
			<div style={{ textAlign: 'center', marginTop: '20px' }}>
				<Button onClick={showMore} color='ghost'>{itemsToShow === items ? 'Еще' : 'Скрыть'}</Button>
			</div>
		</>
	)
}

export default HomeProducts;