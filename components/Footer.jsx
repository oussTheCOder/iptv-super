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
      <div className="container flex justify-center md:justify-between sm:items-start items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-col gap-2 flex-wrap">
          <h4 className='font-code text-xl uppercase text-n-1'>{t("footer-menu-title")}</h4>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className=" text-xs text-slate-500  justify-center "
            >
             {item.title}
            </a>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 flex-wrap">
          <h4 className='font-code text-xl uppercase text-n-1'>{t("footer-contact-title")}</h4>
          {contactItems.map((item) => (
            <a
              key={item.id}
               href={item.href}
              className=" text-xs text-slate-500  justify-center"
            >
             {item.link}
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
