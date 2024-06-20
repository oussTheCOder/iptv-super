'use client'
import Image from 'next/image'
import Section from "./Section";
import { smallSphere, stars } from "@/public/assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const {t} = useTranslation();
    return (
      <Section className="overflow-hidden" >
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <Image
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>
  
          <Heading
           
            title={t("pricing-heading")}
            text={t("pricing-sub-heading")}
            id = "pricing"
          />
  
          <div className="relative" >
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>

        </div>
      </Section>
    );
  };
  
  export default Pricing;
  