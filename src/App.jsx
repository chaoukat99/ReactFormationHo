import React from 'react'
import "./css/app.css"
import Contact from './Contact';
import Connected from './Connected';
import Diconnected from './Diconnected';
import ProductList from './ProductList';
import Chils from './Chils';
import Parent from './Parent';
import Counter from './Counter';
import Login from './Login';
// JSX
function App() {

    let username="Omar";
    
   const DisplayAlert=()=>{

    alert("Hello Guys")
   }


   const age=10;

   const is_conneced=true;

   const user_Role="admin";
  return (
    <>

      {/* <h1 className='cls' onClick={DisplayAlert} >Hello {username}</h1> */}


      {/* {is_conneced?<span className='adulte'>On line</span>:<span className='mineur'>Off Line</span>} */}
      {/* <Contact /> */}

      {/* {is_conneced?<Connected/>:<Diconnected/>} */}


      {/* <h1>Bonjour  {user_Role=="admin"?"Admin":"User"}</h1> */}

         {/* <h1   style={{color:age>18?"green":"red"}}>Authorized</h1>   */}

         {/* <div   style={{display:user_Role=="admin"?"block":"none"}}>

          <h1>Welcome To Admin ARea</h1>
        </div>    */}
        {/* <ProductList/> */}

{/* <Chils   is_connected={true} userlogged={"Karim"}  count={20}   products={[{},{}]}    /> */}

<Login/>
    </>

  )
}

export default App

