'use client'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import classNames from 'classnames/bind';
import styles from './CardSlider.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const imgList = ['nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg', 'nature-5.jpg', 'nature-6.jpg', 'nature-7.jpg', 'nature-8.jpg', 'nature-9.jpg', 'nature-10.jpg',]

export const CardSlider = (): JSX.Element => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	const cs = classNames.bind(styles)

	return (
		<div className={cs('slider_card')}>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className={cs('mySwiper2')}
			>
				{
					imgList.map(item => (
						<SwiperSlide key={item}>
							<img alt='' src={`https://swiperjs.com/demos/images/${item}`} />
						</SwiperSlide>
					))
				}


			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				modules={[FreeMode, Navigation, Thumbs]}
				className={cs('mySwiper')}
				direction={'vertical'}
			>
				{
					imgList.map(item => (
						<SwiperSlide key={item}>
							<img alt='' src={`https://swiperjs.com/demos/images/${item}`} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
}