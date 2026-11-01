import LegalPage from '../components/LegalPage'
import { ISSUES_URL } from '../data/site'

const Accessibility = () => (
  <LegalPage
    title="Accessibility · blogblog"
    description="How blogblog approaches accessibility, what has been tested and how to report a problem."
    heading="Accessibility"
    updated={{ iso: '2026-11-01', label: '1 November 2026' }}
  >
    <p>
      blogblog aims to meet WCAG 2.2 at level AA. It is a small site, so the work is mostly about
      getting the basics right on every page.
    </p>

    <h2>What is in place</h2>
    <ul>
      <li>A &ldquo;Skip to main content&rdquo; link is the first thing you reach with the Tab key.</li>
      <li>
        Each page uses header, navigation, main and footer landmarks, and declares its language as
        English.
      </li>
      <li>Focused links and buttons get a 3px outline, so you can see where you are.</li>
      <li>Links that open a new tab say so to screen readers.</li>
      <li>
        The colours follow your system light or dark setting, and text meets the AA contrast ratio
        in both.
      </li>
      <li>Animations are switched off when you ask your system to reduce motion.</li>
      <li>The layout works down to a 360px wide screen without sideways scrolling.</li>
    </ul>

    <h2>How it is tested</h2>
    <p>
      An automated test suite runs axe against every page in light and dark mode, at 360px and
      1440px wide, and fails on any WCAG 2.2 AA rule it catches. Other tests check the skip link,
      the focus outline and keyboard access to the footer. Automated checks miss things, so some
      problems may still be there.
    </p>

    <h2>Known limitations</h2>
    <ul>
      <li>
        The posts on the home page are samples. Their links do not lead to a post yet.
      </li>
      <li>
        The &ldquo;Writing&rdquo; link in the header scrolls to the list of posts but leaves
        keyboard focus in the header.
      </li>
    </ul>

    <h2>Report a problem</h2>
    <p>
      If something gets in your way, please{' '}
      <a href={ISSUES_URL} target="_blank" rel="noopener noreferrer">
        open an issue on GitHub
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
      . Say which page it was and what you were using, such as your browser or screen reader.
    </p>
  </LegalPage>
)

export default Accessibility
