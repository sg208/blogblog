import { Schibsted_Grotesk } from 'next/font/google'
import '../styles/globals.scss'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const App = ({ Component, pageProps }) => (
  <div className={schibsted.className}>
    <Component {...pageProps} />
  </div>
)

export default App
