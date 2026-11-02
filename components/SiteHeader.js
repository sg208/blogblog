import Link from 'next/link'
import styles from '../styles/SiteHeader.module.scss'

const SiteHeader = () => (
  <header className={styles.header}>
    <p className={styles.stack}>Next.js + React + Sass + Cloudflare</p>
    <nav aria-label="Primary">
      <ul className={styles.links}>
        <li>
          <Link href="/#writing">Writing</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default SiteHeader
