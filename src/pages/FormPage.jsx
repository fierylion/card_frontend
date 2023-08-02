import React, {useState} from 'react'
import useFetch from '../hooks'
import {useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'
const FormPage = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const {obtainData, isLoading, error, data} = useFetch()
  const {userToken } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      surname,
      email,
      gender,
      phoneNumber,
      college,
      courseName,
      birthDate,
    } = e.target.elements
    // Validate all required fields are filled
    if (
      !firstName.value ||
      !surname.value ||
      !email.value ||
      !phoneNumber.value ||
      !college.value ||
      !courseName.value ||
      !birthDate.value ||
      !gender.value
    ) {
      setMessage('Please fill in all fields')
      return
    }
    // Reset the message state if all fields are valid
    setMessage('')

    // Proceed with the API call
    obtainData(
      '/user/details',
      'post',
      {
        first_name: firstName.value,
        surname: surname.value,
        email: email.value,
        gender: gender.value,
        phone_number: phoneNumber.value,
        college_name: college.value,
        course_name: courseName.value,
        date_of_birth: birthDate.value,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
  }
  if (data) {
    if(data?.paid){
      setMessage("Please return to the homepage and make the payment before filling the form!!")
    }
    else{
    navigate('/homepage')
    }
  }

  return (
    <div>
      <h1 className='text-center text-primary'></h1>
      <div
        className='m-5 p-5 border rounded w-50 mx-auto'
        style={{ backgroundColor: '#243c5a' }}
      >
        <div>
        {isLoading && (
            <div
              className='alert alert-warning alert-dismissible fade show d-flex justify-content-between'
              role='alert'
              >
              <small>Loading...</small>
              <button
                
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
                >
                <span aria-hidden='true'>×</span>
                </button>
                </div>
                )
                }
          {error && (
            <div
              className='alert alert-warning alert-dismissible fade show d-flex justify-content-between'
              role='alert'
            >
              <small>There was an error! Please try again later</small>
              <button
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          )}
          {message && (
            <div
              className='alert alert-warning alert-dismissible fade show d-flex justify-content-between'
              role='alert'
            >
              <small>{message}</small>
              <button
                type='button'
                className='close'
                data-dismiss='alert'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          )}
        </div>
        <div className=''>
          <form className='text-white' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group col-md-12'>
                <label htmlFor='inputEmail5'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputEmail5'
                  name='firstName'
                  placeholder='First Name'
                />
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputEmail7'>Surname</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputEmail7'
                  name='surname'
                  placeholder='Surname'
                />
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputEmail4'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail4'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputPassword4d36'>Date of Birth</label>
                <input
                  type='date'
                  className='form-control'
                  id='inputPassword4d36'
                  name='birthDate'
                  placeholder='Date of birth'
                />
              </div>
              <div className='form-group col-md-12 '>
                <label>Gender</label>
                <select className='form-control' name='gender'>
                  <option value={''}>Please choose!</option>
                  <option value={'Male'}>Male</option>

                  <option value={'Female'}>Female</option>
                </select>
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputNumber'>Phone Number</label>
                <input
                  type='text'
                  name='phoneNumber'
                  className='form-control'
                  id='inputNumber'
                  placeholder='0xxxxxxxxx'
                />
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputPassword43'>College</label>
                <input
                  type='text'
                  name='college'
                  className='form-control'
                  id='inputPassword43'
                  placeholder='College'
                />
              </div>
              <div className='form-group col-md-12'>
                <label htmlFor='inputPassword436'>Course Name</label>
                <input
                  type='text'
                  name='courseName'
                  className='form-control'
                  id='inputPassword436'
                  placeholder='Course Name'
                />
              </div>
            </div>
            <button type='submit' className='btn btn-outline-primary mt-3'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormPage