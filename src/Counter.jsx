import React, { useState } from 'react'

function Counter() {

    let [user,setUser]=useState("Hassan");
    let [count,setCount]=useState(0);
  return (
    <div>
        <h1>Hello {count} </h1>
         <button
         onClick={()=>{
            setCount(count+1)
         }}
         >++</button>
         <button
          onClick={()=>{
            setCount(--count)
         }}
         >--</button>

    </div>
  )
}

export default Counter