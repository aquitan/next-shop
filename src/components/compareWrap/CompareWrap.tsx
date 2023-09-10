'use client'

import { CompareItem } from "../compareItem/CompareItem"
import { CompareInfo } from "../compareInfo/CompareInfo"
import { productTest } from "../../../mockData/productsData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';
import { useCompare } from "../../../store"


export const CompareWrap = () => {
    const products = useCompare((state) => state.products)

    return(
        <div>
            <CompareInfo />
            {
                products.length > 0 ?
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            products.map(item => (
                                <SwiperSlide>
                                    <CompareItem product={item} />
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                    : <h1>Добавьте для сравнения</h1>
            }
        </div>
    )
}