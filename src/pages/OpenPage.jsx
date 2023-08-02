import React from 'react'
import Review from '../components/Review'
import PayComponent from '../components/PayComponent'
import FillForm from '../components/FillForm'
import { useGlobalContext } from '../context'
import useFetch from '../hooks'
const OpenPage = () => {
  const {userToken} = useGlobalContext();
  const [dataFi, setDataFi] = React.useState(false)
  const [paid, setPaid] = React.useState(false)
  const {obtainData, error, isLoading, data} = useFetch()
  React.useEffect(
    ()=>{
      if(userToken){
      obtainData('/user/info', 'get', {}, {
        "headers":{
          Authorization:`Bearer ${userToken}`
        }
      })
    }

    }, [userToken]
  )
  React.useEffect(
    ()=>{
        if (data) {
          if (data?.paid === false) {
            setPaid(false)
          } else {
            setPaid(true)
            setDataFi(true)
          }
        }
        if (error) {
          if(error.response.data?.paid){
            setPaid(true)
            setDataFi(false)
          }
        }
    }, [data,error]
  )


  return (
    <>
      {(data || error) && (
        <section className='container'>
          {paid && (
            <div>
              <Review filledData={dataFi} />
            </div>
          )}
          {!paid && (
            <div>
              <PayComponent />
            </div>
          )}
        </section>
      )}
    </>
  )
}

export default OpenPage