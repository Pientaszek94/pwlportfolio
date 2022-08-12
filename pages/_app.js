import Layout from '../components/Layout'
import '../styles/globals.scss'
import {useJsApiLoader} from '@react-google-maps/api'
function MyApp({ Component, pageProps }) {


  const {isLoaded}=useJsApiLoader({googleMapsApiKey:"AIzaSyDZuApf86u95n8egqd4-cME5pO0zP6IIrk" , 
  libraries:['places'], });
  if(!isLoaded) return <div className='loading'><h2>Loading maps...</h2></div>
  return(
            <Layout>

              <Component {...pageProps} />

            </Layout>
    ) 
    
}

export default MyApp
