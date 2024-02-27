import React from 'react'
import logo from './images/logo.png'

export default function Login() {
  return (
    <div className='container'>

      <div className='main'>
      <div className='logo-image'>
        <img src={logo} alt='logo-image'  width={300} height={99}/>
       </div>
       <div className='form'>
       <h2>Login Page</h2>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <div className='form-btn'>
            <button className='btn'>Login</button>
            <button className='btn'>SignUp</button>
        </div>
      
     

       </div>
      </div>

    </div>
  )
}
