import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext.js'
import { UserAuthProvider } from '../context/AuthContext'
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <AmazonProvider>
        <UserAuthProvider>
          <Component {...pageProps} />
        </UserAuthProvider>
      </AmazonProvider>
    </MoralisProvider>
  )
}

export default MyApp
