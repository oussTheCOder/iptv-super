'use client'
import Image from 'next/image'
import {useTranslation} from 'react-i18next';
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay } from 'swiper/modules';
import 'swiper/css';


const ChannelsLogos = ({ className }) => {
  const {t}=useTranslation();
  const channelsLogos = t('channels',{returnObjects:true})
  return (
       
      <div className={className}>
      <h2 className="tagline mb-4 text-center text-n-1/50">
        {t("channels-title")}
      </h2>
      <p className='tagline mb-6 text-center text-n-1/50'>
        {t("channels-description")}
      </p>
      <Swiper
         spaceBetween={10}
         autoplay={{
         disableOnInteraction: false,
         }}
         modules={[Autoplay]}
         breakpoints={{
             // when window width is >= 640px
             320: {
                 slidesPerView: 5,
             },
             // when window width is >= 768px
             768: {
                 slidesPerView: 7,
             },
             // when window width is >= 1024px
             1024: {
                 slidesPerView: 10,
             }
         }}>
        {channelsLogos.map((logo) => (
          <SwiperSlide
          key={logo.id}>
            <span
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={logo.id}
            >
              <Image src={logo.logo} width={134} height={28} alt={logo.logo} />
              </span>
          </SwiperSlide>
          

        ))}
      </Swiper>
    </div>
  );
};

export default ChannelsLogos;