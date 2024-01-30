import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export default function CounterState({initial, min,max}) {
    const [value, setValue] = useState(initial)

  return (
    <div>
        <h2>Counter Count: {value}</h2>
        <button onClick={() => (max >= value+1)? setValue(value+1): setValue(value)}>+</button>
        <button onClick={() => (min <= value-1)? setValue(value-1): setValue(value)}>-</button>
    </div>
  )
}
CounterState.propTypes={
    initial: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
}

