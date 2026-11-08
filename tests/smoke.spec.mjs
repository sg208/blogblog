import { expect, test } from '@playwright/test'

test('home page renders with lang, title and four posts', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('blogblog')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('blogblog')
  await expect(page.getByRole('heading', { level: 2, name: 'Writing' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 3 })).toHaveCount(4)
})

test('skip link is the first focusable element and targets main', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Skip to main content' })
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toBeInViewport()
  await expect(skipLink).toHaveAttribute('href', '#main-container')
  await expect(page.locator('main#main-container')).toHaveCount(1)
})

test('keyboard focus on a post link shows a visible focus ring', async ({ page }) => {
  await page.goto('/')
  const firstPost = page.getByRole('link', { name: /Mobile first is a reading order/ })
  await firstPost.focus()
  await page.keyboard.press('Shift+Tab')
  await page.keyboard.press('Tab')
  await expect(firstPost).toBeFocused()
  const outlineWidth = await firstPost.evaluate((element) => getComputedStyle(element, '::after').outlineWidth)
  expect(outlineWidth).toBe('3px')
})

test('unknown routes render the branded 404 page', async ({ page }) => {
  const response = await page.goto('/does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found')
  await expect(page.getByRole('link', { name: 'Back to the writing' })).toHaveAttribute('href', '/')
})

const legalPages = [
  { path: '/accessibility', heading: 'Accessibility', title: 'Accessibility · blogblog' },
  { path: '/privacy', heading: 'Privacy', title: 'Privacy · blogblog' },
  { path: '/terms', heading: 'Terms', title: 'Terms · blogblog' },
]

for (const { path, heading, title } of legalPages) {
  test(`${path} renders with one h1, a unique title and landmarks`, async ({ page }) => {
    await page.goto(path)
    await expect(page).toHaveTitle(title)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    await expect(page.getByRole('banner')).toHaveCount(1)
    await expect(page.getByRole('main')).toHaveCount(1)
    await expect(page.getByRole('contentinfo')).toHaveCount(1)
  })
}

test('footer links to every legal page and the source on GitHub', async ({ page }) => {
  await page.goto('/')
  const footerNav = page.getByRole('navigation', { name: 'Site information' })
  for (const { path, heading } of legalPages) {
    await expect(footerNav.getByRole('link', { name: heading })).toHaveAttribute('href', path)
  }
  const sourceLink = footerNav.getByRole('link', { name: 'Source code on GitHub (opens in a new tab)' })
  await expect(sourceLink).toHaveAttribute('href', 'https://github.com/sg208/blogblog')
  await expect(sourceLink.locator('svg')).toHaveAttribute('aria-hidden', 'true')
  await expect(sourceLink).toHaveAttribute('target', '_blank')
  await expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer')
})

test('site chrome has exactly one GitHub link', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('header a[href*="github.com"], footer a[href*="github.com"]')).toHaveCount(1)
})

test('footer legal links are keyboard reachable and navigate', async ({ page }) => {
  await page.goto('/')
  const footerNav = page.getByRole('navigation', { name: 'Site information' })
  const privacyLink = footerNav.getByRole('link', { name: 'Privacy' })
  await privacyLink.focus()
  await expect(privacyLink).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/privacy\/?$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy')
})

test('start reading moves focus to the post list', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Start reading' }).click()
  await expect(page.locator('#writing')).toBeFocused()
})

test('header writing link moves focus to the post list', async ({ page }) => {
  await page.goto('/')
  const primaryNav = page.getByRole('navigation', { name: 'Primary' })
  await primaryNav.getByRole('link', { name: 'Writing' }).click()
  await expect(page.locator('#writing')).toBeFocused()
})

test('pages carry Open Graph title and description', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'blogblog')
  await expect(page.locator('meta[property="og:description"]')).toHaveCount(1)
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary')
})

test('header Writing link from another page moves focus to the post list', async ({ page }) => {
  await page.goto('/privacy')
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Writing' }).click()
  await expect(page.locator('#writing')).toBeFocused()
})
