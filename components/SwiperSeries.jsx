
'use client'
import Section from './Section';
import {useEffect , useState} from 'react'
import Image from 'next/image';
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const fetchSeries = async () =>{
    const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=d2d9025e7f101b3c88abb61fdaf46a27&language=en-US&page=1';
    const res = await fetch(url,
        {
           cache: 'default'
        });
    const data = await res.json();
    return data.results
}

export default function SwiperSeries(){
    const [series , setSeries] = useState([]) ; 

    useEffect (()=>{
        const getSeries = async()=>{
            const results = await fetchSeries ();
            setSeries(results) ; 
        }
        getSeries();
    },[])
  
    return (
        <>
            <h5 className="tagline mb-6 text-center text-n-1/50">
            Series
            </h5>
            <Swiper
            spaceBetween={10}
            autoplay={{
            delay: 2500,
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
                    slidesPerView: 5,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 7,
                }
            }}
            className="mySwiper">

            {series.map((result)=>(
                <SwiperSlide key={result.id}>
                    <Image className="rounded-sm" 
                    src={`https://image.tmdb.org/t/p//w500/${result.poster_path}`}
                    alt={`serie ${result.id}`}
                        
                     width={250} 
                     height={200} />
                </SwiperSlide>
            ))}

            </Swiper>
    </>
      );
}