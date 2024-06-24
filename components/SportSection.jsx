'use client'
import Image from "next/image";
import Section from "./Section";
import Button from "@/components/Button"
import { check } from "@/public/assets";
import { sportSectionImg } from "@/public/assets";
import { useTranslation } from "react-i18next";

const SportSection = () =>{
    const {t} = useTranslation();
    const sportFeaturesList= t('sport-features',{returnObjects:true});

    return (
        <Section
        className='py-20 md:py-28'
        >
        <div className='container relative  flex flex-col gap-8  md:flex-row md:justify-center md:items-center'>
            <div className="md:w-2/5 ">
               <div className="max-w-[50rem] mx-auto mb-8 pl-4 md:text-left  lg:mb-8">
                    <h2 className="h2">{t('sport-heading')}</h2>
                    <p className="body mt-4 text-n-4">{t('sport-description')}</p>
               </div>
                <ul className="pl-2  mb-8 mx-auto md:mx-0 ">
                    {
                        sportFeaturesList.map((item , index)=>(
                            <li
                            key={index}
                             className="flex justify-start items-start gap-4  p-2  ">
                            <Image src={check} width={20} height={20} alt="Check" />
                            <p className="body relative bottom-1">{item}</p>
                            </li>
                        ))
                    }
                </ul>
                <Button href="#pricing" white >
                {t('button-buy')}
                </Button>
            </div>
            <div className="relative flex justify-center items-center md:w-2/5 md:ml-auto h-[500px]">
                    <Image
                        src={sportSectionImg}
                        fill
                        className="rounded-sm object-cover"
                        alt='Sport image'
                    />
                </div>
        </div>
        </Section>
    )
}
export default SportSection