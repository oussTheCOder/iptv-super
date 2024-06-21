'use client'
import React from 'react'
import {useState} from 'react'
import Button from './Button'
import { HamburgerMenu } from './design/Header'
import MenuSvg from '@/public/assets/svg/MenuSvg'
import {useTranslation}from 'react-i18next'
import LanguageChanger from './LanguageChanger'

const Header = () => {
    const [openNavigation , setOpenNavigation] = useState (false);
    const {t} = useTranslation();
    const navItems = t('navigation',{returnObjects:true});
    
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    
    if (!openNavigation) return;
    setOpenNavigation(false);
  };
    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
            openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}>
            <div className='flex items-center  px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                <a className='block w-[12rem] xl:mr-8' href="/">
                    <span className='text-2xl text-slate-500 w-36 h-24'>Digital Iptv</span>
                </a>
                <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row
                    ">

                        {navItems.map((item)=>(
                            <a className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 
                            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12
                            ${
                                item.onlyMobile ? "lg:hidden" : ""
                              }
                              `
                            }
                            key={item.id}
                            href={item.url}
                            onClick={handleClick}
                              >
                                {item.title}
                            
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                
            <Button className="!hidden lg:!inline-flex" href="/#pricing">
                {t('button-buy')}
            </Button>
            <Button
                className="ml-auto  lg:hidden"
                px="px-3"
                onClick={toggleNavigation}
                name='toggle btn'
                >
                <MenuSvg openNavigation={openNavigation} />
            </Button>
            <LanguageChanger />
            </div>
        </div>
    )
}

export default Header
