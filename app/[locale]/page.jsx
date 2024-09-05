import React from 'react'
import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import SportSection from '@/components/SportSection'
import Roadmap from '@/components/Roadmap'
import Services from '@/components/Services'
import FooterComp from '@/components/FooterComp'
import HeaderComp from '@/components/HeaderComp'
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'

const namespaces = ['home']

export default async function Page({params: {locale}}){
  const { t, resources } = await initTranslations(locale,namespaces);

  return (
    <TranslationsProvider
      namespaces={namespaces}
      locale={locale}
      resources={resources}
    >
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <HeaderComp locale={locale}/>
        <Hero />
        <Services />
        <Pricing />
        <SportSection />
        <Roadmap />
        <Benefits />
        <FooterComp locale={locale}/>
      </div>
      <ButtonGradient />
    </TranslationsProvider>
    
  )

}


