import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <section className='d-flex flex-column'>
    <div>
      <h1 className='text-center text_blue mt-5'>Welcome to Dufa</h1>
    </div>
      <div className='d-flex justify-content-center mt-4'>
      <div
        className='shadow border p-5 rounded text-white'
        style={{ backgroundColor: '#243c5a' }}
      >
        <h4 className='text_blue'>Obtain your card now!</h4>
        <div className='d-flex justify-content-between mt-4'>
          <button className='btn btn-outline-primary' onClick={
            () => navigate('/register')
            }>Register</button>
          <button className='btn btn-outline-primary'
          onClick={()=>navigate('/login')}
          >Login</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage