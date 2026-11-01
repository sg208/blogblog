import Layout from './Layout'
import styles from '../styles/LegalPage.module.scss'

const LegalPage = ({ title, description, heading, updated, children }) => (
  <Layout title={title} description={description}>
    <article className={styles.page} aria-labelledby="page-title">
      <header className={styles.intro}>
        <h1 id="page-title" className={styles.title}>
          {heading}
        </h1>
        {updated && (
          <p className={styles.updated}>
            Last updated <time dateTime={updated.iso}>{updated.label}</time>
          </p>
        )}
      </header>
      <div className={styles.body}>{children}</div>
    </article>
  </Layout>
)

export default LegalPage
