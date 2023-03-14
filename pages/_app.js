import '@/styles/globals.css'
import '../styles/layout.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  } // handle layout conditionally
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
