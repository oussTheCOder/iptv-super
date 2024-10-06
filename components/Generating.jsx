'use client'
import Image from 'next/image'
import { loading } from "@/public/assets";
import { useTranslation } from 'react-i18next';

const Generating = ({ className }) => {
  const {t} = useTranslation();
  return (
    <a
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
      href={t('whatsApp-link-trial')}
      target='_blank'
    >
      <Image className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      <span>
      {'playlist ' + t('trial-btn')} 
      </span>
    
    </a>
  );
};

export default Generating;
