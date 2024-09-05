'use client'
import React from 'react'
import {useTranslation} from 'react-i18next'

function BlogHero() {
  const {t} = useTranslation();
  return (
    <div>
           <h1 className='text-5xl md:text-6xl mb-8 text-center'>{t('heroTitle')}</h1>
           <p className='text-center text-gray-400 mb-6 max-w-lg'>{t('heroDescription')}</p>
    </div>
  )
}

export default BlogHero