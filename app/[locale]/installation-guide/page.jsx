'use client'
import React , {useEffect} from 'react'
import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DropDownTutorial from '@/components/installation-guide/DropDownTutorial'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'

const namespaces = ['tutorial'];

export default  async function  InstallationGuide({params: {locale}}){
  const { t, resources } = await initTranslations(locale,namespaces);
 
  return (
    <TranslationsProvider
      namespaces={namespaces}
      locale={locale}
      resources={resources}
    >
      <DynamicMetaTags t={t}/>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen'>
        <Header />
        <main className='py-24'>
            <h1 className='h1 mb-8 text-center'>{t("tutorial-heading")}</h1>
            <p className='body-1 max-w-3xl text-center mx-auto mb-6 text-n-2 lg:mb-8 '>{t("tutorial-description")}</p>
            <div className="text-center mb-10">

              <Button
              className=' text-center inline-block'
              >
                {t("tutorial-support")}
              </Button>
            </div>
            <div className='grid grid-cols-1  gap-2 mx-auto max-w-screen-lg'>
              <div className='flex flex-col'>
                <DropDownTutorial deviceOption='PC & MAC'/>
                <DropDownTutorial deviceOption='SMART TV'/>
                <DropDownTutorial deviceOption='ANDROID'/>
                <DropDownTutorial deviceOption='APPLE / IOS'/>
                <DropDownTutorial deviceOption='FireStick'/>
                <DropDownTutorial deviceOption='MAG'/>
              </div>
            </div>

          
        </main>
        <Footer/>
      </div>
      <ButtonGradient />
    </TranslationsProvider>
    
  )

}


function DynamicMetaTags({ t }) {
  useEffect(() => {
    document.title = t('meta-tag.title');
  }, [t]);

  return null;
}