import { expect, test } from '@playwright/test'

test('home page renders with lang, title and four post cards', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('blogblog')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Welcome to blogblog!')
  await expect(page.getByRole('heading', { level: 3 })).toHaveCount(4)
})

test('skip link is the first focusable element and targets main', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Skip to main content' })
  await expect(skipLink).toBeFocused()
  await expect(skipLink).toHaveAttribute('href', '#main-container')
  await expect(page.locator('main#main-container')).toHaveCount(1)
})

test('api/hello returns JSON', async ({ request }) => {
  const response = await request.get('/api/hello')
  expect(response.ok()).toBe(true)
  expect(await response.json()).toEqual({ name: 'John Doe' })
})

test('keyboard focus on a post card shows the highlight border', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')
  const firstCard = page.getByRole('link', { name: /Post 1/ })
  await expect(firstCard).toBeFocused()
  await expect(firstCard).toHaveCSS('border-top-color', 'rgb(0, 112, 243)')
})
