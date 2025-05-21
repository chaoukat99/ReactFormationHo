import React, { useState } from 'react'
import "./css/login.css"

function Login() {


  /*
  To get inputs values :
  1-create state for each input 
  2- use onChange event to get the value of the input
  
  
  */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
  {/* From Uiverse.io by gharsh11032000 */}
  <div className="form-container">
    
      <div className="form-group">
        <label htmlFor="email">Company Email</label>
        <input type="text" id="email" name="email" required=""   
          onChange={(ev)=>setEmail(ev.target.value)}
        
        />
      </div>
      <div className="form-group">
        <label htmlFor="textarea">How Can We Help You?</label>
                <input type="password" id="email" name="email" required=""
                
                onChange={(ev)=>setPassword(ev.target.value)}
                />

      </div>
      <button className="form-submit-btn" type="submit"
      onClick={()=>{
        alert("Email: "+email+" Password: "+password)
      }}
      >
        Submit
      </button>
   
  </div>
</>

  )
}

export default Login