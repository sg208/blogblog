import Link from 'next/link'
import { REPO_URL } from '../data/site'
import styles from '../styles/SiteFooter.module.scss'

const SITE_LINKS = [
  { href: '/accessibility', label: 'Accessibility' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

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
    <nav className={styles.siteNav} aria-label="Site information">
      <ul className={styles.siteLinks}>
        {SITE_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <li>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
            Source on GitHub
            <span className="visually-hidden"> (opens GitHub in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
    <p className={styles.wordmark} aria-hidden="true">
      blogblog
    </p>
  </footer>
)

export default SiteFooter
