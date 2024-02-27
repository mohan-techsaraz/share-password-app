import React from 'react'
import logo from './images/logo.png'

export default function Signup() {
  return (
    <div className='container'>

    <div className='main'>
    <div className='logo-image'>
      <img src={logo} alt='logo-image'  width={300} height={99}/>
     </div>
     <div className='form'>
     <h2>SignUp</h2>
      <input type='text' placeholder='Enter email' />
      <input type='password' placeholder='password' />
      <input type='password' placeholder='Repeat password' />
      <div className='form-btn'>
          <button className='btn'>Cancel</button>
          <button className='btn'>SignUp</button>
      </div>

     </div>
    </div>

  </div>
  )
}
