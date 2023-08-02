import React from 'react'
import { useNavigate } from 'react-router-dom' 
import useFetch from '../hooks'
import { useGlobalContext } from '../context'

const Review = ({filledData}) => {
 const navigate = useNavigate()
 const {userToken} = useGlobalContext();
 const {obtainData, error, isLoading, data} = useFetch()
 const handleSubmit = (e)=>{
  e.preventDefault()
  const email = e.target.email?.value
  if(email){
    obtainData('user/send_email', 'post', {email:email}, {
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    })
  }


 }
  return (
    <section>
    {
      data && <div className='alert alert-success'>Email Sent!!!</div>
    }
    {
      error && <div className='alert alert-danger'>An Error Occured!!</div>
    }
      {!filledData && (
        <div>
          <h3>Fill the form to obtain your card!</h3>
          <button
            className='btn btn-outline-success'
            onClick={() => navigate('/form')}
          >
            Fill Form
          </button>
        </div>
      )}
      {filledData && (
      <div className='my-3'>
        <h3>Enter email to mail a copy of the card!</h3>
        <form  onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            id='email'
            className='form-control'
            placeholder='Enter email'
          />
          <button className='btn btn-outline-success mt-3'>Mail Card</button>
        </form>
      </div>)}
    </section>
  )
}

export default Review