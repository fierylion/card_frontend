import React from 'react'
import { useGlobalContext } from '../context'
import {useNavigate} from 'react-router-dom'
import useFetch from '../hooks'
const RegistrationPage = () => {
  const navigate=useNavigate()
   const { obtainData, isLoading, error, data } = useFetch();
   const {setUserToken}  = useGlobalContext() 
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
   
    obtainData('/register', 'post', {
      email: email.value,
      password: password.value,
    })

  }
  if(data){
    localStorage.setItem('dufa_token',data.token)
    setUserToken(data.token)
    navigate('/homepage')
  }

  return (
    <section
      className='p-3 border rounded shadow  w-50 mx-auto mt-5'
      style={{ backgroundColor: '#243c5a' }}
    >
      <div>{
        error&&
        <div
          className='alert alert-warning alert-dismissible fade show d-flex justify-content-between'
          role='alert'
        >
          <small >There was an error! Please try again later</small>
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <span aria-hidden='true' >×</span>
          </button>
        </div>}
      </div>
      <div>
        <h3 className='text_blue text-center'>Register</h3>
      </div>
      <div>
        <form className='text-white' onSubmit={handleSubmit}>
          <div className='form-group '>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' className='form-text text-primary'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='text-center m-3 d-flex flex-column'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
            <small>
              <a href='/login' className='text-white'>
                Already have an account? Login
              </a>
            </small>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegistrationPage