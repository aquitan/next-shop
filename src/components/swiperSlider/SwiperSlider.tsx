'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import MainSlideItem from '../mainSlideItem/MainSlideItem';
import styles from './SiperSlider.module.scss'


const items = [
  { src: '/kargosil_vysokostojkie_cherniteli_dlya_shin.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.', title: 'Cargosil', link: '/catalog' },
  { src: '/gidroizolyaciya_torgovogo_kioska_cargosil.jpg', text: 'Лучшая автохимия на рынке 3', title: 'Cargosil 3', link: '/catalog' },
]


const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className={styles.slider}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
    >
      {
        items.map((item: any) => (
          <SwiperSlide key={item.title}>
            <MainSlideItem src={item.src} text={item.text} title={item.title} link={item.link} alt={''} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default SwiperSlider;