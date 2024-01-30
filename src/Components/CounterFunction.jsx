import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export default function CounterFunction({counter, min, max}) {
    const[count, setCount]=useState(counter);
    useEffect( () => {
      console.log('UseEffect')
      setCount(count)
    }, [])
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=> (max >= count+1) ? setCount(count+1) : setCount(count)}>+</button>
        <button onClick={()=> (min <= count-1) ? setCount(count-1) : setCount(count)}>-</button>
    </div>
  )
}

CounterFunction.propTypes={
  counter: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
}
