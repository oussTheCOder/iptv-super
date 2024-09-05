'use client'
import React from "react";
import Section from "./Section";
import {useTranslation} from 'react-i18next';


const Footer = () => {
const {t}=useTranslation();
const menuItems = t("navigation",{returnObjects:true});
const contactItems = t("footer-contact",{returnObjects:true});
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex justify-center max-sm:flex-col gap-10 sm:justify-between ">
       
        <section >
          <h4 className='font-code mb-2 text-xl uppercase text-n-1'>{t("footer-menu-title")}</h4>
          <ul className="flex flex-col  flex-wrap">
            {menuItems.map((item) => (
              <li
              key={item.id}
              >
                <a
                  href={item.url}
                  className=" text-xs text-slate-300  justify-center "
                >
                {item.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className='font-code mb-2 text-xl uppercase text-n-1'>{t("footer-contact-title")}</h4>
          <ul className="flex flex-col  flex-wrap">
            <li
            key='0'>
            <a
                href={t("whatsApp-link")}
                target='_blank'
              className=" text-xs text-slate-300  justify-center"
            >
              Whatsapp
            </a>
            </li>
            <li
            key='1'>
            <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                target='_blank'
              className=" text-xs text-slate-300  justify-center"
            >
              {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
            </a>
            </li>
          </ul>
        </section>
        <p className="caption text-n-3 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
