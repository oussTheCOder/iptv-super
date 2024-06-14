'use client'
import {useEffect} from 'react'
export default function DynamicMetaTags({ t }) {
    useEffect(() => {
      document.title = t('meta-tag.title');
    }, [t]);
  
    return null;
  }