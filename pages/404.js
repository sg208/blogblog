import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NotFound.module.scss'

const NotFound = () => (
  <Layout title="Page not found · blogblog" description="This page could not be found.">
    <section className={styles.notFound} aria-labelledby="not-found-title">
      <h1 id="not-found-title" className={styles.title}>
        Page not found
      </h1>
      <p className={styles.text}>
        The page you asked for is not here. It may have moved, or the address has a typo.
      </p>
      <Link href="/" className={styles.action}>
        Back to the writing
      </Link>
    </section>
  </Layout>
)

export default NotFound
