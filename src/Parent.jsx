import React from 'react'
import Fils from './Fils'

function Parent() {


  function SubComponent(){
    return <h1>This is Sub Component</h1>
  }  

const users=[
    
    {id:1, name:"John", is_connected:true,email:"test@gmail.com",passwod:"uizduz",image:"url"},
    {id:2, name:"jane", is_connected:true,email:"test@gmail.com",passwod:"uizduz",image:"url"},
    {id:3, name:"jonathan", is_connected:true,email:"test@gmail.com",passwod:"uizduz",image:"url"},
]  

const DisplayALert=()=>{
    alert("This is From Parent");
}


  return (
    <>
    
  
    <h1>
        Parent Component
    </h1>

 <Fils  data={users} showalert={DisplayALert}   comp={<SubComponent/>} />
    </>
  )
}

export default Parent