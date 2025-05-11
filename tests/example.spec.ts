import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";

test('has title', async ({ page }) => {
  await page.goto('https://nextjs.org/');

  // Expect a title "to contain" a substring.

  await argosScreenshot(page, "homepage");

  await expect(page).toHaveTitle(/Next.js by Vercel - The React Framework1/);

  // await page.screenshot({ path: 'screenshots/example.png' });
  await argosScreenshot(page, "homepage");
});

test('Screenshot', async ({ page }) => {
  await page.goto('https://nextjs.org/blog');

  await argosScreenshot(page, "homepage");

  await expect(page).toHaveTitle(/Next.js by Vercel - The React Framework2/);
  // page.getByRole('link', { name: 'Learn Next.js' }).click();

  // await page.screenshot({ path: 'screenshots/vercel.png' });
  await argosScreenshot(page, "homepage");
});