import React, { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'
import useFetch from '../hooks'
import { useNavigate } from 'react-router-dom'

const PayComponent = () => {
 const [provider, setProvider] = useState(null)
 const navigate = useNavigate()
 const {data, error, isLoading, obtainData} = useFetch()
 const { userToken } = useGlobalContext()
 useEffect(() => {
  if(provider){
   obtainData('/user/payment/generate', 'post', {provider:provider}, {
    "headers":{
     Authorization:`Bearer ${userToken}`
    }
   })
  }

 }, [provider])
 useEffect(
  () => {
   if (data) {
    console.log(data)
    window.location=data.data

   }
   if (error) {
    console.log(error)
   }
  }, [data, error, isLoading]
 )
  return (
    <section className='d-flex justify-content-center flex-column'>
    <div>
     {
      isLoading && <small className=' p-3 rounded bg-dark text-warning'>Loading....</small>
     }
    </div>

      <h3 className='text-center m-3'>Payment Options</h3>
      <div
        className='border d-flex mx-auto justify-content-center'
        style={{ backgroundColor: '#243c5a' }}
      >
        <div className='row '>
          <div
            className='col-sm-6 p-3 m-4 border shadow w-25 text-center rounded text-white link'
            style={{ backgroundColor: '#f18720' }} onClick={()=>setProvider('Halopesa')}
          >
            <h4>Halopesa</h4>
          </div>
          <div
            className='col-sm-6 shadow border p-4 w-25 m-4 text-center rounded text-success link'
            style={{ backgroundColor: '#df0000' }} onClick={()=>setProvider('Azampesa')}
          >
            <h4>Azampesa</h4>
          </div>
          <div
            className='col-sm-6 border shadow  p-4 w-25 m-4 text-center rounded text-white link'
            style={{ backgroundColor: '#193667' }} onClick={()=>setProvider('Tigo')}
          >
            <h4>Tigopesa</h4>
          </div>
          <div
            className='col-sm-6 border shadow p-4 w-25 m-4 text-center rounded text-warning link'
            style={{ backgroundColor: '#063576' }} onClick={()=>setProvider('Airtel')}
          >
            <h4>Airtelmoney</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PayComponent