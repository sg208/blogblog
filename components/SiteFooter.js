import styles from '../styles/SiteFooter.module.scss'

const SiteFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.close}>
      <p className={styles.thanks}>Thanks for reading.</p>
      <a
        className={styles.credit}
        href="https://github.com/sg208"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with love by github.com/sg208
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    </div>
    <p className={styles.wordmark} aria-hidden="true">
      blogblog
    </p>
  </footer>
)

export default SiteFooter
