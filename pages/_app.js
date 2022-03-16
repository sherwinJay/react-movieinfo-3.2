import { useState } from 'react'
import { Layout } from '../components'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {

  const [isDark, setIsDark] = useState(true);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
