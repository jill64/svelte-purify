import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-purify' })
  ).toBeVisible()

  await expect(
    page.getByText('This is rendered only in the Browser')
  ).toBeVisible()
})
