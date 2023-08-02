import React from 'react'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const {userToken}= useGlobalContext()
  const storedToken = localStorage.getItem('dufa_token')
  const logoutUser = () => {
    localStorage.removeItem('dufa_token')
    window.location.href = '/'
  }
  return (
    <>
      {/* Image and text */}
      <nav className='navbar navbar-light '>
        <a className='navbar-brand' href='/'>
          <img
            src='dufa.png'
            width={40}
            height={40}
            className='d-inline-block align-top me-2 rounded rounded-circle '
            alt=''
          />
          <h3 className='d-inline-block' style={{ color: '#243c5a' }}>
            Dufa
          </h3>
        </a>
        { (userToken || storedToken) &&
        <div>
          <button className='btn btn-outline-dark me-2' onClick={()=>window.location.pathname='/homepage'}>Home</button>
          <button className='btn btn-outline-dark' onClick={logoutUser}>Logout</button>
        </div>}
      </nav>
    </>
  )
}

export default Navbar