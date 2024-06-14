'use client'
import { useState } from "react"
import { useTranslation } from "react-i18next";


const DropDownTutorial = ({deviceOption}) =>{
    const {t} = useTranslation();
    //extract the corres country data based on the name ,
    const optionsData = t("tutorial-options",{returnObjects:true});
    const optionData = optionsData.filter(optionItem=>optionItem.option===deviceOption);
    const optionName = optionData[0].option;
    const optionDescription = optionData[0]["option-description"];
    const optionList = optionData[0]["option-list"];
    const [isOpen , setIsOpen] = useState(false);
    return (
        <div className="relative inline-block text-left px-2 ">
            <div>
                <button
                type="button"
                className={`inline-flex rounded  border w-full  shadow-sm px-4 py-4 mb-4 text-sm font-medium text-slate-300  border-none focus:outline-none ${isOpen ? 'bg-n-6':'bg-n-7'} `}
                onClick={() => setIsOpen(!isOpen)}
                >
                {optionName}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            {
                isOpen && (
                    <div className="py-4  px-4">
                        <p className='text-sm  text-slate-500 mb-2'>{optionDescription}</p>
                        <ul className="p-2 list-disc">
                          {optionList.map((list,index)=>(
                            <li
                            key={index}
                            className="text-xs"
                            >
                            {list}
                            </li>
                          ))}
                      
                       </ul>
                       
                    </div>
                    
                )
            }
        </div>
    )
}
export default DropDownTutorial