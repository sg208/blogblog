import Head from 'next/head'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { SITE_DESCRIPTION, SITE_NAME } from '../data/site'
import styles from '../styles/Layout.module.scss'

const Layout = ({ title, description = SITE_DESCRIPTION, children }) => (
  <div className={styles.shell}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
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
  </div>
)

export default Layout
