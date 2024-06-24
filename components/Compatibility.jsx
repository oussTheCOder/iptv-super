'use client'
import Image from "next/image";
import Section from "./Section";
import Button from "@/components/Button"
import { compatibilityImg } from "@/public/assets";
import { useTranslation } from "react-i18next";

const Compatibility = () =>{
    const {t} = useTranslation();

    return (
        <Section
        className='py-20 md:py-28'
        >
        <div className='container relative border-2 border-white'>
            <div className="">
               <div className="max-w-[50rem] mx-auto mb-8">
                    <h2 className="h2">Compatibility Section</h2>
                    <p className="body mt-4 text-n-4">Could be Activated On all devices and platforms</p>
               </div>
                <Button href="#pricing" className='block mx-auto' white >
                {t('button-buy')}
                </Button>
            </div>
            <div className="relative flex justify-center items-center  h-[500px] ">
            <div className="w-[90%] h-full">
                        <Image
                            src={sportSectionImg}
                            width={100}
                            className="rounded-sm object-cover"
                            alt='Sport image'
                        />
                    </div>
            </div>
        </div>
        </Section>
    )
}
export default Compatibility ;