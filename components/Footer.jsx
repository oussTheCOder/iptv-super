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
        <p className="caption text-n-3 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-col gap-2 flex-wrap">
          <h4 className='font-code text-xl uppercase text-n-1'>{t("footer-menu-title")}</h4>

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
        <ul className="flex flex-col gap-2 flex-wrap">
          <h4 className='font-code text-xl uppercase text-n-1'>{t("footer-contact-title")}</h4>
          <li>
          <a
              href={t("whatsApp-link")}
              target='_blank'
             className=" text-xs text-slate-300  justify-center"
           >
            Whatsapp
           </a>
          </li>
          {contactItems.map((item) => (
            <li
            key={item.id} >
            <a
              
               href={item.href}
              className=" text-xs text-slate-300  justify-center"
            >
             {item.link}
            </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
