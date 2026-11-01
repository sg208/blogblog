import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = ['/', '/accessibility', '/privacy', '/terms', '/does-not-exist']
const colorSchemes = ['light', 'dark']
const viewports = [
  { width: 360, height: 800 },
  { width: 1440, height: 900 },
]

for (const colorScheme of colorSchemes) {
  for (const viewport of viewports) {
    for (const route of routes) {
      test(`${route} has no WCAG 2.2 AA violations (${colorScheme}, ${viewport.width}px)`, async ({ page }) => {
        await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' })
        await page.setViewportSize(viewport)
        await page.goto(route)
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze()
        expect(results.violations).toEqual([])
      })
    }
  }
}

for (const route of routes) {
  test(`${route} has no horizontal scroll at 360px`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 })
    await page.goto(route)
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
    expect(hasOverflow).toBe(false)
  })
}
