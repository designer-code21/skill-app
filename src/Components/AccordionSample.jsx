import React, { useRef, useState } from 'react'

export default function AccordionSample(props) {
    const [show, setShow] = useState(null);

    function classNames(...classes){
        return classes.filter(Boolean).join(' ');
    }
    const contentEl = useRef();
  return (
    <section className="accordion-block-wrapper">
        <div className="container">
            <div className="accordion-main">
                <div className={classNames ("accordion-toggle", show ? 'active' : '')}>
                    <button onClick={() => setShow(!show)} type="button" className='accordion-toggle-btn'>Accordion Button</button>
                </div>
                <div ref={contentEl} className="accordion-content transition-all duration-500 ease-in-out" style={show ? {height: contentEl.current.scrollHeight} : {height: '0', overflow: 'hidden'}}>
                    <div className="content-inner">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum officiis distinctio doloribus vitae deserunt, hic quod odio impedit a corrupti fugiat vel nam atque velit quas quae nobis quisquam ipsam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
