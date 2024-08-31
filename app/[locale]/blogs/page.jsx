
import React from 'react'
import initTranslations from '../../i18n';
import TranslationsProvider from '@/components/TranslationsProvider'
import Blogitem from '../../../components/blogs/Blogitem'
import Heading from '../../../components/Heading'
import Categories from '../../../components/blogs/categories'


// Define your dynamic routes at build time
export async function generateStaticParams() {
    const locales = ['de', 'en']; // Add all the locales you support here
    return locales.map(locale => ({ locale }));
  }


export default async function page ({params:{locale}}){
    const res = await fetch(`https://local-ecom-back.onrender.com/api/blogs?populate=category,mainImage&locale=${locale}`);
    const fetchedData= await res.json();
    const data = fetchedData?.data
   
    return (
        <>
            <main>
                <section className='h-[400px] mb-20 flex items-center flex-col p-4 justify-center bg-n-7'>
                    <h1 className='text-5xl md:text-6xl mb-8 text-center'>IPTV Digital Blogs</h1>
                    <p className='text-center text-gray-400 mb-6 max-w-lg'>Welcome to the Digital Iptv Blog! Here, we share everything you need to know about IPTV. You'll find easy guides on how to set it up, the latest updates, news, and how to request a free trial. Whether you're new or experienced with IPTV, our blog has something for everyone.</p>
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
                                    data?.map(dataItem=>(
                                        <Blogitem  key={dataItem?.id} blogData={dataItem} />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <section className='flex items-center px-4 justify-center'>
                        <div className='bg-gray-800 p-6 flex items-center justify-center w-80 rounded'>
                            <Categories />
                        </div>
                    </section>
                </div>
             </main>
        </>
    )

}





// export default function page({params: {locale}}) {
//     const [data , setData] = useState([])
//     useEffect(()=>
//         {
//             fetch(`https://local-ecom-back.onrender.com/api/blogs?populate=*&locale=${locale}`)
//             .then(res=>res.json())
//             .then(fetchdata=>setData(fetchdata.data))
//         },[locale])

//     useEffect(()=>{console.log(data)},[data,locale])

//   return (

//     <>
//     <main>
//         <section className='h-[400px] mb-20 flex items-center flex-col p-4 justify-center bg-n-7'>
//             <Heading
//                     className="md:max-w-md mb-4 lg:max-w-2xl"
//                     title='Digital IPTV Blog'
//                 />
//             <p className='text-center text-gray-400 mb-6'>Welcome to the Digital Iptv Blog! Here, we share everything you need to know about IPTV. You'll find easy guides on how to set it up, the latest updates, news, and how to request a free trial. Whether you're new or experienced with IPTV, our blog has something for everyone.</p>
//             <div className="flex justify-center items-center gap-2">
//                 <div className='flex items-center justify-center gap-1'>
//                 {/* home svg */}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
//                     <a href="/">Home</a>
//                 </div>
//                 {/* arrow right */}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#7c7c7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//                 <a href="/blogs" className='block font-light text-gray-300 hover:text-gray-500'>Blogs</a>
//                 </div>
//         </section>
//         <section>
//             <div className='flex justify-center items-center '>
//                 <div className='grid grid-cols-1 px-4'>
//                     {
//                         data?.map(dataItem=>(
//                             <Blogitem  key={dataItem?.id} blogData={dataItem} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     </main>
//     </>
//   )
// }
