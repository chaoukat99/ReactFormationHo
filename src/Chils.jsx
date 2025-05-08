import React from 'react'

function Chils(props) {
    

  return (
    <div>
        <h1>This Is Child Comp</h1>
          {props.is_connected?<h1>Connected</h1>:<h1>Disconnected</h1>}  
   <h1>User : {props.userlogged}</h1>
    </div>
  )
}

export default Chils