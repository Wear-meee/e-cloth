import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import PrivateRoute from "./privateRoute";
import { SnipcartProvider } from 'use-snipcart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <SnipcartProvider>
        <Component {...pageProps} />
    </SnipcartProvider>
  </div>
  )
}
