'use client'
import React from 'react'
import ReactMarkDown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const customRenders = {
  h2 : ({children}) => <h2 className='text-3xl text-slate-100 font-semibold mb-4'>{children}</h2>,
  h3 : ({children}) => <h3 className='text-xl text-slate-200 font-semibold my-2'>{children}</h3>,
  h4 : ({children}) => <h4 className='text-xl text-slate-200 font-semibold my-2'>{children}</h4>,
  p : ({children}) => <p className='text-base  text-slate-500  mb-4'>{children}</p>,
  a : ({children}) => <a className='text-sm italic  text-cyan-500 '>{children}</a>,
  ul: ({ children }) => <ul className="list-disc list-inside pl-5 my-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside pl-5 my-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="my-1">{children}</li>,
  strong : ({children}) => <strong className='text-base  text-slate-400  mb-4'>{children}</strong>,
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="rounded-sm block pr-4 my-4 shadow-md   h-auto"
    />
  ),
}
export default function MarkDownCom({content}) {
  return (
    <ReactMarkDown
    rehypePlugins = {[rehypeRaw]}
    components={customRenders}
     >
      {content}
      </ReactMarkDown>
  )
}
