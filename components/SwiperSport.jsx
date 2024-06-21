'use client'
import Image from 'next/image'
import {useTranslation} from 'react-i18next';
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay } from 'swiper/modules';
import 'swiper/css';



const SwiperSport = ({ className }) => {
  const {t}=useTranslation();
  const sportsItem = t('sports-img',{returnObjects:true})
  return (
       
      <div className={className}>
      <Swiper
         spaceBetween={10}
         autoplay={{
         disableOnInteraction: false,
         }}
         modules={[Autoplay]}
         breakpoints={{
             // when window width is >= 640px
             320: {
                 slidesPerView: 3,
             },
             // when window width is >= 768px
             768: {
                 slidesPerView: 4,
             },
             // when window width is >= 1024px
             1024: {
                 slidesPerView: 5,
             }
         }}>
      <ul className="flex">
        {sportsItem.map((sport) => (
          <SwiperSlide
          key={sport.id}>
            <li
              className="flex items-center justify-center flex-1 "
              key={sport.id}
            >
              <Image className='rounded-sm'
              src={sport.src}
              width={250}
              height={400}
              alt={`sport ${sport.id}`}
              />
            </li>
          </SwiperSlide>

        ))}
      </ul>
      </Swiper>
    </div>
  );
};

export default SwiperSport;