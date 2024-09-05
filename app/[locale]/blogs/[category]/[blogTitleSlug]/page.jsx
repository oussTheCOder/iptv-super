
import React from 'react'
import initTranslations from '../../../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import Heading from '../../../../../components/Heading'
import Categories from '../../../../../components/blogs/Categories'
import MarkDownCom from '../../../../../components/blogs/MarkDownCom'
import HeaderComp from'../../../../../components/HeaderComp'
import FooterComp from'../../../../../components/FooterComp'
import ButtonGradient from '@/public/assets/svg/ButtonGradient'
const supportedLocales = ['de' , 'en']; // List all supported locales
  // Define your dynamic routes at build time
  export async function generateStaticParams() {
        const paths = [];
        for (const locale of supportedLocales){
            const cateRes = await fetch(`https://local-ecom-back.onrender.com/api/categories?locale=${locale}&populate[blogs][fields]=slug`)
            const categoriesData = await  cateRes.json();
            const categories = categoriesData?.data || [] ;
            categories.flatMap((category)=>{
                category?.attributes?.blogs?.data.map((blog)=>{
                    paths.push({
                        locale,
                        category:category.attributes.slug,
                        blogTitleSlug : blog?.attributes?.slug
                    })
                })
            })
           
        }
        // console.log('paths : ', paths)
        return paths;
}
export default async function page ({params:{locale , category , blogTitleSlug}}){
    // console.log('category:' , category)
    // console.log('blogTitleSlug:' ,blogTitleSlug)
    const blogRes = await fetch(`https://local-ecom-back.onrender.com/api/blogs?populate=category,slug,mainImage&locale=${locale}&filters[category][slug][$eq]=${category}&filters[slug][$eq]=${blogTitleSlug}`);
    const fetchedBlogData= await blogRes.json();
    const [blogData] = fetchedBlogData?.data;
    // console.log('blog item data :', blogData)
    const cateRes = await fetch(`https://local-ecom-back.onrender.com/api/categories?populate=category&locale=${locale}`);
    const fetchedCateData= await cateRes.json();
    const cateData = fetchedCateData?.data
    return (
        <>
            <HeaderComp locale={locale} />
            <main className='my-24'>
                <section className='h-[400px] mb-20 flex items-center flex-col p-4 justify-center bg-n-7'>
                    <h1 className='text-3xl max-w-screen-lg  md:text-5xl mb-8 text-center'>{blogData?.attributes?.title}</h1>
                    <div className="flex justify-center items-center gap-2">
                        <div className='flex items-center justify-center gap-1'>
                        {/* home svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                            <a href="/">Home</a>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                        {/* arrow right */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#7c7c7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            <a href="/blogs" className='block font-light text-gray-300 hover:text-gray-500'>Blogs</a>
                        </div>
                        <div className='flex items-center justify-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#7c7c7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            <a href={`/blogs/${category}`} className='block font-light text-gray-300 hover:text-gray-500'>{blogData?.attributes?.category?.data?.attributes?.name}</a>
                        </div>
                    </div>
                </section>
                <div className='flex flex-col p-2 gap-10 lg:flex-row lg:justify-around lg:items-start'>
                    <section className=''>
                        <div className='max-w-screen-md'>
                            <MarkDownCom content={blogData?.attributes?.content} />
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
        </>
    )
}
