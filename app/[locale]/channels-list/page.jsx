import React from 'react'
import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import DropDownChannels from '@/components/channels-list/DropDownChannels'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import NotFound from '../not-found'

const namespaces = ['channels-list'];

export default  async function  ChannelsList({params: {locale}}){
  const { t, resources } = await initTranslations(locale,namespaces);
 const isHidden = true ;
 if(isHidden){
  return(
    <NotFound/>
  )
 }
  return (
    <TranslationsProvider
      namespaces={namespaces}
      locale={locale}
      resources={resources}
    >
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen'>
        {/* <Header /> */}
        <main className='py-40'>
     
          {/* usa canada uk europe */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div className='flex flex-col'>
              <DropDownChannels country="UK : United Kingdom" />
              <DropDownChannels country='DE : Germany' />
              <DropDownChannels country='PL: Poland' />
              <DropDownChannels country='CZ: Czech' />
              <DropDownChannels country='CH: Switzerland' />
            </div>
            <div className='flex flex-col'>

            </div>
            <div className='flex flex-col'>

            </div>
          
          </div>
        </main>
      </div>
      <ButtonGradient />
    </TranslationsProvider>
    
  )

}


