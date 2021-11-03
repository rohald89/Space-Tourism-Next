import Header from '../components/Header'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    document.body.className = pathname === '/' ? 'home' : pathname.slice(1)
  })

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
