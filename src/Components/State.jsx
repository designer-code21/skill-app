import React, {useState} from 'react'

export default function State() {

    const [count, setCount] = useState(0);

    // Increment
    const increment = () => {
        setCount(count + 1);
    }

    // Decrement
    const decrement = () => {
        setCount(count - 1);
    }
    
  return (

    <div className="content">
        Qty. <button onClick={decrement} className="bg-seaGreen py-1 px-3 rounded-lg text-white">-</button> {count} <button onClick={increment} className="bg-seaGreen py-1 px-3 rounded-lg text-white">+</button>
        
    </div>
  )
}
