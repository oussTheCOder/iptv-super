import React from 'react'

export default function Blogitem({blogData}) {
  return (
   <>
    <a className="block cursor-pointer max-w-md rounded overflow-hidden mb-4 bg-n-7 shadow-lg  ">
        <img className="w-full" src={blogData?.attributes?.mainImage?.data?.attributes?.url} alt="Sunset in the mountains"/>
     
        <div className="px-6 py-4">
        <span
              className="inline-block mb-4 bg-blue-500  text-white  p-2 px-4 text-xs rounded">
              {blogData?.attributes?.category?.data?.attributes?.name}
            </span>
            <h2 className="font-bold text-xl mb-2">{blogData?.attributes?.title}</h2>
            <p className="text-gray-400 mb-4 text-sm line-clamp-3">
            {blogData?.attributes?.overview}
            </p>
        </div>
      
    </a>
    </>
  )
}
