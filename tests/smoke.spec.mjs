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

test('api/hello returns JSON', async ({ request }) => {
  const response = await request.get('/api/hello')
  expect(response.ok()).toBe(true)
  expect(await response.json()).toEqual({ name: 'John Doe' })
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
