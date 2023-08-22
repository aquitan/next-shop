'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SliderCentered.module.scss'

// import required modules
import { Pagination } from 'swiper/modules';

const imgList = ['nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg', 'nature-5.jpg', 'nature-6.jpg', 'nature-7.jpg', 'nature-8.jpg', 'nature-9.jpg', 'nature-10.jpg',]

export const SliderCentered = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				centeredSlides={false}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className={styles.mySwiperCenter}
			>
				{
					imgList.map(item => (
						<SwiperSlide key={item}>
							<img className={styles.img} alt='' src={`https://swiperjs.com/demos/images/${item}`} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
