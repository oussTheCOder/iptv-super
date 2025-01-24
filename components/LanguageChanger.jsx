// 'use client';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';

// export default function LanguageChanger() {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = e => {
//     const newLocale = e.target.value;

   
//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;


  

//     // redirect to the new locale path
//     if (
//       currentLocale === i18nConfig.defaultLocale &&

//     ) {
//       router.push('/' + newLocale + currentPathname);
//       if(currentPathname.includes('/blogs') && currentPathname.length > 10){
//         router.push(
//           currentPathname.replace(`${currentPathname}`,'/blogs')
//         )
//         // router.push('/')
//       }
     
//     } else {
//       router.push(
//         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//       );
//       if(currentPathname.includes('/blogs') && currentPathname.length > 10){
//         // router.push('/')
//         router.push(
//           currentPathname.replace(`${currentPathname}`,'/blogs')
//         )
//       }
     
//     }

//     router.refresh();
//   };

//   return (
//     <>
//       <select onChange={handleChange} name='language' className='p-2 border border-slate-600 rounded-sm' value={currentLocale}>
//         <option className='p-2 inline-block' value="en">EN</option>
//         <option className='p-2 inline-block' value="de">DE</option>
//       </select>
//     </>
//   );
// }

'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = e => {
    const newLocale = e.target.value;

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // If default locale ('de') should be included in the URL
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      // For other locales, ensure the correct path prefix
      let newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

      // Special handling for /blogs
      if (currentPathname.includes('/blogs') && currentPathname.length > 10) {
        newPathname = newPathname.replace(`${currentPathname}`, '/blogs');
      }

      router.push(newPathname);
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} name='language' className='p-2 border border-slate-600 rounded-sm' value={currentLocale}>
      <option className='p-2 inline-block' value="en">EN</option>
      <option className='p-2 inline-block' value="de">DE</option>
    </select>
  );
}
