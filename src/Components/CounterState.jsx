import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function CounterState(props) {
    const [value, setValue] = useState(props.initial)

  return (
    <div>
        <h2>Counter Count: {value}</h2>
        <button onClick={() => (props.max >= value+1)? setValue(value+1): setValue(value)}>+</button>
        <button onClick={() => (props.min <= value-1)? setValue(value-1): setValue(value)}>-</button>
    </div>
  )
}
// CounterState.propTypes={
//     initial: PropTypes.number,
//     min: PropTypes.number,
//     max: PropTypes.number
// }

