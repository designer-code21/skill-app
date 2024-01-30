import React, {useState, useRef} from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function AccordionBlock(props, index) {
    const [show, setShow] = useState(null);
    const contentEl = useRef();
    function classNames(...classes){
        return classes.filter(Boolean).join(' ');
    }
    return (
        <div className="accordion-block mb-6 last:mb-0">
            <div className="accordion-single">
                <div className={classNames ("accordion-toggle", show ? "active":"")}>
                    <button onClick={() => setShow(!show)} className="w-full rounded-lg py-4 px-4 text-left bg-purple-100 text-purple-900 font-medium relative">{props.title} <span className="absolute right-4 inset-y-0 flex items-center"><ChevronUpIcon className={classNames("h-5 w-5 inline-block transition-all duration-500 ease-in-out", show ? "": "rotate-180 transform")}></ChevronUpIcon></span></button>
                </div>
                {/* {show ?  */}
                    <div ref={contentEl} className="accordion-content mt-2 py-0 px-4 bg-white rounded-lg transition-all duration-500 ease-in-out overflow-hidden" 
                    style={show ? {height: contentEl.current.scrollHeight} : {height:"0px", overflow:"hidden"}}
                    >
                        <div className="accordion-inner py-6"><h3>{props.heading}</h3><p>{props.content}</p></div> 
                    </div>
               {/* : ""} */}
            </div>
        </div>
    )
}

export default AccordionBlock;
