import React from 'react'

function Fils(props) {
  return (
    <div>
        <h2>Fils Component</h2>


        {/* {props.data.map((el,i)=>{
          return (<ul>
            <li>{el.id}</li>
            <li>{el.name}</li>
            <li>{el.is_connected?"Online":"OffLine"}</li>
          </ul>) 
        })} */}


         {props.comp} 

        <button
        
        onClick={props.showalert}
        
        >Click</button>
    </div>
  )
}

export default Fils