import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "./Sidebar"
import { SnipcartProvider } from 'use-snipcart';
import Footer from "./Footer"



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>

      <SnipcartProvider>

    <Sidebar/>

    
        <Component {...pageProps} />
   
    <Footer />
    </SnipcartProvider>

  </div>
  )
}
