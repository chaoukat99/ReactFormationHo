import React, { useState } from 'react'

function Fils(props) {

  const [users,setUser]=useState(props.data)


  const DeleteUser=(id)=>{
     let newArr= users.filter((el)=>el.id!=id)
   
    setUser(newArr)

  }
  return (
    <div>
        <h2>Fils Component</h2>

<table className='table table-hover'>
  <thead>
    <tr>
      <th>Id</th>
      <th>Username</th>
      <th>Email</th>
      <th>Password</th>
      <th>IsConnected</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
{users.map((el,i)=>{
          return (
           <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.passwod}</td>
              <td>{el.is_connected?"Connected":"Disconnected"}</td>
              <td>
                <button className='btn btn-info'>
                  Voir
                </button>
                <button className='btn btn-danger'  onClick={()=>DeleteUser(el.id)}>

                 
                  Supprimer
                </button>
              </td>
           </tr>
           ) 
        })}
  </tbody>

        
</table>

         {props.comp} 

        <button
        
        onClick={props.showalert}
        
        >Click</button>
    </div>
  )
}

export default Fils