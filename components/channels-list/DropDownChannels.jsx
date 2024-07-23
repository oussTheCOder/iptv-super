'use client'
import { useState } from "react"
import { useTranslation } from "react-i18next";


const DropDownChannels = ({country}) =>{
    const {t} = useTranslation();
    //extract the corres country data based on the name ,
    const countries = t("country",{returnObjects:true});
    const countryData = countries.filter(countryItem=>countryItem.name===country);
    console.log(countryData);
    const countryName = countryData[0].name;
    const countryChannels = countryData[0].channels;
    const [isOpen , setIsOpen] = useState(false);
    return (
        <div className="relative inline-block text-center px-2 max-w-sm">
            <div>
                <button
                type="button"
                className="inline-flex rounded justify-center  border w-full md:w-[19rem] lg:w-[25rem] max-w-sm border-n-8 shadow-sm px-4 py-4 bg-n-6 text-sm font-medium text-slate-300 hover:bg-n-7 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                >
                {countryName} 
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            {
                isOpen && (
                    <div className="">
                        <ul className="p-2 ">
                          {countryChannels.map((channel,index)=>(
                            <li
                            key={index}
                            className="max-w-80  text-left px-auto p-2 pl-28" 
                            >
                                <span>{channel}</span>
                            </li>
                          ))}
                      
                       </ul>
                       
                    </div>
                    
                )
            }
        </div>
    )
}
export default DropDownChannels