import Head from 'next/head'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import styles from '../styles/Layout.module.scss'

const DEFAULT_DESCRIPTION = 'A small blog about building for the web: mobile first, accessible, unhurried.'

const Layout = ({ title, description = DEFAULT_DESCRIPTION, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <a href="#main-container" className={styles.skipLink}>
      Skip to main content
    </a>

    <SiteHeader />

    <main id="main-container" tabIndex={-1} className={styles.main}>
      {children}
    </main>

    <SiteFooter />
  </>
)

export default Layout
