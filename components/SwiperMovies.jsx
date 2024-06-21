
'use client'
import {useEffect , useState ,cache} from 'react';//useEffect for data fetching and useState for handle data fetching
import Image from "next/image";
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay } from 'swiper/modules';
import 'swiper/css';


const fetchMovies = cache(async () =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d2d9025e7f101b3c88abb61fdaf46a27&language=en-US&page=1';
    const res = await fetch(url);
    const data = await res.json();
   
    return data.results
})
export default  function SwiperMovies(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = cache(async () => {
            const results = await fetchMovies();
            setMovies(results);
        });
        getMovies();
    }, []);
    return (
        <>
        <div className="container" >
        <span className="tagline mb-6 text-center text-n-1/50">
        Movies
      </span>
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

            {movies.map((result)=>(
                <SwiperSlide key={result.id}>
                    <Image className="rounded-sm" 
                        src={`https://image.tmdb.org/t/p//w500/${result.poster_path}`}
                        alt={`movie ${result.id}`}
                        width={250} 
                        height={200} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </>
      );
    //   <Image className="rounded-sm" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} width={250} height={200} />

}


