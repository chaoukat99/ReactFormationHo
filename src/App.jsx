import React from 'react'
import "./css/app.css"
import Contact from './Contact';
// JSX
function App() {

    let username="Omar";
    
   const DisplayAlert=()=>{

    alert("Hello Guys")
   }


   const age=20;

   const is_conneced=false;
  return (
    <>

      <h1 className='cls' onClick={DisplayAlert} >Hello {username}</h1>
      {is_conneced?<span className='adulte'>On line</span>:<span className='mineur'>Off Line</span>}
      <Contact />
    </>
  )
}

export default App

