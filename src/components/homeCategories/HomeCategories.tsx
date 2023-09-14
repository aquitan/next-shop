'use client'

import styles from './HomeCategories.module.scss'
import Section from "../section/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CategorieItem from "../categorieItem/CategorieItems";

type Props = {
	categories: {
		img: string,
		title: string,
		link: string,
		id: number
	}[]
}

const HomeCategories = ({ categories }: Props) => {
	return (
		<>
			<h2 className={styles.title}>Категории товаров</h2>
			<div className={styles.catalog}>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
					  clickable: true,
					}}
					breakpoints={{
					  640: {
						slidesPerView: 2,
						spaceBetween: 20,
					  },
					  768: {
						slidesPerView: 3,
						spaceBetween: 40,
					  },
					  1024: {
						slidesPerView: 4,
						spaceBetween: 50,
					  },
					}}
					modules={[Pagination, Navigation]}
					navigation={true}
					className={styles.mySwiper}
				>

					{
						categories.map((item: any) => (
							<SwiperSlide className={styles.swiperItem} key={item.title}>
								<CategorieItem link={item.link} key={item.title} alt={item.title} src={item.img} title={item.title} />
							</SwiperSlide>

						))
					}
				</Swiper>
			</div>
		</>
	)
}

export default HomeCategories;