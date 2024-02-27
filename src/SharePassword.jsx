import React from 'react'

export default function SharePassword() {
  return (
    <div className='main'>
    
    <div className='form'>
       <h2>SharePassword</h2>
        <input type='text' placeholder='credential name' />
     
        <label>select website</label>
        <select>
          <option >select website</option>
          <option >2</option>
          <option >3</option>
        </select>
        <textarea rows="10" cols="30">credentials details</textarea>
        <input type='password' placeholder='password' />
        <input type='text' placeholder='reason to share passwords'/>
        <div className='form-btn'>
            <button className='btn'>Submit</button>
            
        </div>
      
     

       </div>
    </div>
  )
}
