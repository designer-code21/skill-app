import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function CounterAlpha({initial, min, max}) {
    const [value, setValue] = useState(initial);

  return (
    <div className="counter-box">
        <button type="button" className='w-6 h-6 bg-blue-100 rounded-md mr-2' onClick={() => (min <= value - 1) ? setValue(value - 1) : setValue(value)}>-</button>
        <span className='w-40 text-center inline-block border-2 border-black-200 pl-5 pr-5 py-1 rounded-md'>Values: {value}</span>
        <button type="button" className='w-6 h-6 bg-blue-100 rounded-md ml-2' onClick={() => (max >= value + 1) ? setValue(value + 1) : setValue(value)}>+</button>
    </div>
  )
}

CounterAlpha.propTypes= {
    initial: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
}

