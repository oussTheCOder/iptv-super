
import React from 'react'
import Footer from './Footer'
import initTranslations from '../app/i18n';
import TranslationsProvider from './TranslationsProvider'

const namespaces = ['footer']

export default async function FooterComp({locale}) {
    const {t , resources} = await initTranslations(locale , namespaces)
  return (
   
        <TranslationsProvider 
            locale={locale}
            namespaces={namespaces}
            resources={resources}
        >
             <Footer/>
        </TranslationsProvider>
  )
}
