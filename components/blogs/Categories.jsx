
import React from 'react'



 async function Categories({data}) {
  return (
    <div>
        <h2 className='text-center mb-6'>Categories</h2>
        <ul>
        {
        data.map(dataItem=>(
            <li key={dataItem.id} className=''>
                <a href={`/blogs/${dataItem?.attributes?.slug}`} className='flex items-center gap-4 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c7c7e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
                    <span className='text-xs text-gray-400 hover:text-gray-500'>{dataItem?.attributes?.name}</span>
                </a>
            </li>
        ))
        }
        </ul>
    </div>
  )
}
export default Categories