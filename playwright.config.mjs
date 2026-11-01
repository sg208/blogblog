import { defineConfig, devices } from '@playwright/test'

const port = 3107

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  reporter: 'list',
  use: { baseURL: `http://127.0.0.1:${port}` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `pnpm build && pnpm start --listen ${port}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
