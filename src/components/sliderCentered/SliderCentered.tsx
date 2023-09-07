'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SliderCentered.module.scss'

// import required modules
import { EffectCreative, Navigation } from 'swiper/modules';
import Image from 'next/image';

const imgList = ['/bottomSlider/germetik_dlya_gidroizolyacii_polupricepa_cargosil.png', '/bottomSlider/germetik_dlya_shvov_budki_cargosil.png', '/bottomSlider/zhidkaya_gidroizolyzcionnaya_mastika_cargosil_dlya_tentov_i_furgonov.png', '/bottomSlider/gidroizolyaciya_avtofurgona_izotermeskogo_cargosil.png', '/bottomSlider/zimnyaya_zhidkaya_rezina_dlya_gidroizolyacii_furgonov_cargosil_zimniy.png']

export const SliderCentered = () => {
	return (
		<>
			<Swiper
				grabCursor={true}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}}
				navigation={true}
				modules={[EffectCreative, Navigation]}
				className={styles.mySwiperCenter}
			>

				{
					imgList.map(item => (
						<SwiperSlide key={item}>
							<Image width={500} height={350} className={styles.img} alt='' src={item} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
