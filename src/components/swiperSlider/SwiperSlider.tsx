'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import MainSlideItem from '../mainSlideItem/MainSlideItem';
import styles from './SiperSlider.module.scss'


const items = [
  { src: '/main-slider/banner-1.jpeg', text: 'Продлить срок службы резиновых элементов автомобиля', title: 'Силиконовая смазка Cargosil', link: '/catalog/silikony' },
  { src: '/main-slider/chernitely.jpeg', text: 'Восстановить внешний вид шин', title: 'Чернители для шин Cargosil', link: '/catalog/cherniteli' },
  { src: '/main-slider/masla.jpeg', text: 'Высокоэффективные синтетические масла', title: 'Синтетические масла Cargosil', link: '/catalog/masla' },
  { src: '/main-slider/mastika.jpeg', text: 'Гидротзоляция грузовых фургонов', title: 'Гибридные мастики-герметики Cargosil', link: '/catalog/mastiki' },
  { src: '/main-slider/plastik.jpeg', text: 'Восстановления пластика', title: 'Зашитное прозрачное покрытие на основе каучука', link: '/catalog/cherniteli' },
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