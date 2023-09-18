'use client'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import classNames from 'classnames/bind';
import styles from './CardSlider.module.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

// const imgList = ['nature-1.jpg', 'nature-1.jpg', 'nature-1.jpg', ]

export const CardSlider = ({ imgs }: any): JSX.Element => {
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
					imgs?.map((item: string) => (
						<SwiperSlide key={item}>
							<img alt='' src={`${item}`} />
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
					imgs?.map((item: string) => (
						<SwiperSlide key={item}>
							<img alt='' src={`${item}`} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
}