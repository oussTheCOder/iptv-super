
import React from 'react'
import Header from './Header'
import initTranslations from '../app/i18n';
import TranslationsProvider from './TranslationsProvider'

const namespaces = ['header']

export default async function HeaderComp({locale}) {
    const {t , resources} = await initTranslations(locale , namespaces)
  return (
   
        <TranslationsProvider 
            locale={locale}
            namespaces={namespaces}
            resources={resources}
        >
             <Header/>
        </TranslationsProvider>
  )
}