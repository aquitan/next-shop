// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import styles from './Slider.module.scss'

type SliderProps = {
    imgs: string[]
}

const Slider = ({imgs}:SliderProps) => {
    return(
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
            }}
            modules={[Pagination]}
            className={styles.mySwiper}
            >
            {
                imgs.map((item:string) => (
                    <SwiperSlide className={styles.sliderItem} key={item}>
                        <Image className={styles.img} src={item} width={550} height={350} alt=''/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Slider;