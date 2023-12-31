import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-purify' })
  ).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'This is Render on Server' })
  ).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'This is Render on Browser' })
  ).toBeVisible()
})
