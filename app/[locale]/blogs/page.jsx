

import React from 'react'
import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import Link from 'next/link'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import Blogitem from '../../../components/blogs/Blogitem'
import Heading from '../../../components/Heading'
import Categories from '../../../components/blogs/Categories'
import BlogHero from '../../../components/blogs/BlogHero'
import HeaderComp from '/components/HeaderComp'
import FooterComp from '/components/FooterComp'

// Define your dynamic routes at build time
export async function generateStaticParams() {
    const locales = ['de', 'en']; // Add all the locales you support here
    return locales.map(locale => ({ locale }));
  }

const namespaces = ['blogsPage'];
export default async function page ({params:{locale}}){
    const {t , resources} = await initTranslations(locale , namespaces)
    const blogRes = await fetch(`https://local-ecom-back.onrender.com/api/blogs?populate=category,mainImage,slug&locale=${locale}`);
    const fetchedBlogData= await blogRes.json();
    const blogData = fetchedBlogData?.data;
    // console.log(blogData)
    //
    const cateRes = await fetch(`https://local-ecom-back.onrender.com/api/categories?populate=category&locale=${locale}`);
    const fetchedCateData= await cateRes.json();
    const cateData = fetchedCateData?.data
   
    return (
        <>
        <TranslationsProvider
        namespaces={namespaces}
        resources={resources}
        locale={locale}
          
        >
            <HeaderComp locale={locale}/>
            <main className="my-24">
                <section className='h-[400px] mb-20 flex items-center flex-col p-4 justify-center bg-n-7'>
                    <BlogHero />
                    <div className="flex justify-center items-center gap-2">
                        <div className='flex items-center justify-center gap-1'>
                        {/* home svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                            <a href="/">Home</a>
                        </div>
                        {/* arrow right */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#7c7c7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        <a href="/blogs" className='block font-light text-gray-300 hover:text-gray-500'>Blogs</a>
                        </div>
                </section>
                <div className='flex flex-col  gap-10 md:flex-row md:items-start'>
                    <section className=''>
                        <div className='flex justify-center items-center '>
                            <div className='grid grid-cols-1 px-4 lg:grid-cols-2 lg:gap-10 '>
                                {
                                    blogData?.map(blog=>(
                                     
                                            <a key={blog.id} className='mb-8' href={`/blogs/${blog.attributes.category.data.attributes.slug}/${blog.attributes.slug}`}>
                                                <Blogitem blogData={blog} />
                                            </a>
                                        
                                        // <Blogitem  key={dataItem?.id} blogData={dataItem} />
                                    ))
                                }
                               
                            </div>
                        </div>
                    </section>
                    <section className='flex items-center px-4 justify-center'>
                        <div className='bg-gray-800 p-6 flex items-center justify-center w-80 rounded'>
                            <Categories data={cateData}/>
                        </div>
                    </section>
                </div>
             </main>
             <FooterComp locale={locale}/>
             <ButtonGradient/>
        </TranslationsProvider>
        </>
    )

}
