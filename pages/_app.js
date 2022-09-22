import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from "../components/store/index"
import { useEffect, useState } from 'react'
import GridLoader from "react-spinners/GridLoader";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[])
  return (
    <>
    
       {loading ?  
       <div className='w-full h-screen flex justify-center items-center'>
         <GridLoader color={"#DC143C"} loading={loading} size={30} />
       </div>
       : 
       <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
      }
    </>
  )
}

export default MyApp
