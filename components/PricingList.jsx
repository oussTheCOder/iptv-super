'use client'
import Image from 'next/image'
import { check } from "@/public/assets";
import Button from "./Button";
import { useTranslation } from 'react-i18next'

const PricingList = () => {
  const {t}=useTranslation();
  const pricingList = t('pricing-list',{returnObjects : true})
  const colorClasses = ['text-color-1', 'text-color-2' ,'text-color-3' ,'text-color-4']
  return (
    <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-2" >
      {pricingList.map((item , index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h3 className={`h4 ${colorClasses[index]} mb-4`}>{item.title}</h3>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">{t('pricing-currency')}</div>
                <p className={`text-[5.5rem]  leading-none font-bold`}>
                  {item.price}
                </p>
              </>
            )}
          </div>

          <a
            className="w-full mb-6 px-7 text-n-8 bg-white rounded-md  button  relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1"

            href={item.url}
            target='_blank'
          >
           {t("button-buy-now")} 
          </a>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <Image src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
