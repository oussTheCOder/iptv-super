'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown';

export default function Blogitem({blogData}) {
  if (!blogData) return null; // Ensure data is present before rendering
  return (
   <div>
          <img className="w-full" src={blogData?.attributes?.mainImage?.data?.attributes?.url} alt="Sunset in the mountains"/>
          <div className="px-6 py-4 bg-gray-900">
              <span
                    className="inline-block mb-4 bg-blue-500  text-white  p-2 px-4 text-xs rounded">
                    {blogData?.attributes?.category?.data?.attributes?.name}
                  </span>
              <h2 className="font-bold text-xl mb-2 line-clamp-2">{blogData?.attributes?.title}</h2>
              {blogData?.attributes?.content && (
                <ReactMarkdown  className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {blogData?.attributes?.overview}
                </ReactMarkdown>
              )}
        </div>

    </div>
  )
}
