import Link from 'next/link'
import LegalPage from '../components/LegalPage'
import { ISSUES_URL } from '../data/site'

const Privacy = () => (
  <LegalPage
    title="Privacy · blogblog"
    description="What blogblog collects (nothing) and which services handle your visit."
    heading="Privacy"
    updated={{ iso: '2026-11-01', label: '1 November 2026' }}
  >
    <p>
      blogblog does not collect personal data. There are no accounts, no forms, no analytics and
      no cookies. The site does not store anything in your browser&rsquo;s local storage either.
    </p>

    <h2>Who handles your visit</h2>
    <p>
      The site is a set of static pages served by Cloudflare. Like any web host, Cloudflare
      receives standard request details such as your IP address, browser user agent and the page
      you asked for, and may keep them in its logs. See the{' '}
      <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
        Cloudflare privacy policy
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>{' '}
      for how it handles that data.
    </p>
    <p>
      Pages load nothing from other services. The font is bundled with the site at build time.
    </p>

    <h2>Links to other sites</h2>
    <p>
      The GitHub icon in the footer and the GitHub links on these pages take you to github.com. Once you follow one,
      GitHub&rsquo;s own privacy policy applies.
    </p>

    <h2>Questions</h2>
    <p>
      There is no contact email. For questions about this page,{' '}
      <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">
        open an issue on GitHub
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
      . The <Link href="/terms">terms of use</Link> cover the rest.
    </p>
  </LegalPage>
)

export default Privacy
