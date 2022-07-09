import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
