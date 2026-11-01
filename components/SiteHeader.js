import Link from 'next/link'
import styles from '../styles/SiteHeader.module.scss'

const GITHUB_URL = 'https://github.com/sg208'

const SiteHeader = () => (
  <header className={styles.header}>
    <p className={styles.stack}>Next.js + React + Sass + Vercel</p>
    <nav aria-label="Primary">
      <ul className={styles.links}>
        <li>
          <Link href="/#writing">Writing</Link>
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default SiteHeader
