import React, { useState } from 'react'

export default function AccordionSample(props) {
    const [value, setValue] = useState(props.initial)
  return (
    <section className="accordion-block-wrapper">
        <div className="container">
            <div className="qty-counter">
                <button className="decrease h-10 w-10 border border-dashed mr-2" onClick={() => (props.min <= value-1) ? setValue(value-1) : setValue(value) }>-</button>
                <div className="value border h-10 inline-block w-12 align-top inline-flex items-center justify-center">{value}</div>
                <button className="increase h-10 w-10 border border-dashed ml-2" onClick={() => (props.max >= value+1) ? setValue(value+1) : setValue(value) }>+</button>
            </div>
        </div>
    </section>
  )
}