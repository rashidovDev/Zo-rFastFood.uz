import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from "../components/store/index"

function MyApp({ Component, pageProps }) {
  return (
       <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
  )
}

export default MyApp
