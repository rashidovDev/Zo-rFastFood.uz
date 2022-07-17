import Head from 'next/head'
import Menu from '../components/Menu'
import Modal from '../components/Modal/Modal'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'

export default function Home() {

  return (
   <>   
    <Head>
      <title>Zo'rFastFood | Главная</title>
      <meta name="keywords"/>
    </Head>
       <Navigation />
       <Slider />
       <Menu />
   </>
  )
}
