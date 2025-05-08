import React from 'react'
import "./css/app.css"

function Diconnected() {
  return (
    <div className='disconnected'>
        <h1>Disconnected</h1>
        <p>Sorry, you are currently offline.</p>
        <p>Please check your internet connection.</p>
    </div>
  )
}

export default Diconnected