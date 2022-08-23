import React from 'react'
import styles from './Find.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find your drive</h1>
            <div className={styles.text_bg}>
                <p><span>Explore the world's largest car sharing marketplace</span></p>
            </div>
        </div>
        <div className={styles.slider}>
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
    >
            <SwiperSlide></SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Find