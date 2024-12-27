'use client'
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import ChannelsLogos from "./ChannelsLogos";
import { useTranslation } from 'react-i18next';
import SwiperMovies from './SwiperMovies';
import SwiperSeries from './SwiperSeries';
const Hero = () => {
     const { t } = useTranslation();
    // const parallaxRef = useRef(null);
  
    return (
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" >
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 ">
            <h1 className="h1 mb-6">
             {t('hero-heading')}
              {/* <span className="inline-block relative"> */}
                {/* Brainwave{" "}
                <Image
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                /> */}
              {/* </span> */}
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
             {t('hero-sub-heading')}
            </p>
            <Button href="#pricing" white>
              {t('button-buy')}
            </Button>
            <Button href={t('whatsApp-link-trial')} target="_blank" >
              {t('trial-btn')}
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <Image
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div> */}
            <BackgroundCircles />
          <div className='mb-6'>
            <SwiperMovies />
          </div>
          <div className='mb-2'>
            <SwiperSeries />
          </div>
          </div>
          {/* <ChannelsLogos className="relative z-10 mt-20" /> */}
        </div>
  
        <BottomLine />
      </Section>
    );
  };
  
  export default Hero;
  

