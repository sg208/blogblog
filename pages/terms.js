import Link from 'next/link'
import LegalPage from '../components/LegalPage'
import { REPO_URL } from '../data/site'

const Terms = () => (
  <LegalPage
    title="Terms · blogblog"
    description="Terms for using the blogblog demo site and its source code."
    heading="Terms"
    updated={{ iso: '2026-11-01', label: '1 November 2026' }}
  >
    <p>
      blogblog is a demo and portfolio project. The posts on it are samples written to show the
      layout, not advice of any kind.
    </p>

    <h2>No warranty</h2>
    <p>
      The site and its content are provided as is, without any warranty. It may change, break or
      go offline at any time, and you use it at your own risk.
    </p>

    <h2>The code</h2>
    <p>
      The source code is on{' '}
      <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
        GitHub
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>{' '}
      under the MIT License. You can use, copy and change it under that license&rsquo;s terms.
    </p>

    <h2>Other people&rsquo;s work</h2>
    <p>
      Third-party software, fonts and trademarks used here belong to their owners and keep their
      own licenses.
    </p>

    <h2>Privacy</h2>
    <p>
      How your visit is handled is covered on the <Link href="/privacy">privacy page</Link>.
    </p>
  </LegalPage>
)

export default Terms
