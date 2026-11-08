import Link from 'next/link'
import styles from '../styles/SiteHeader.module.scss'

// next/link scrolls to the fragment but leaves focus in the header, so move it to the post list.
const handleWritingClick = (event) => {
  const isModifiedClick = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
  if (isModifiedClick) return
  document.getElementById('writing')?.focus({ preventScroll: true })
}

const SiteHeader = () => (
  <header className={styles.header}>
    <p className={styles.stack}>Next.js + React + Sass + Cloudflare</p>
    <nav aria-label="Primary">
      <ul className={styles.links}>
        <li>
          <Link href="/#writing" onClick={handleWritingClick}>
            Writing
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default SiteHeader
