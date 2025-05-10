import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13 Pro'],
  locale: 'en-US',
  geolocation: { longitude: 12.492507, latitude: 41.889938 },
  permissions: ['geolocation'],
})

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Virtual Regression Test POC/);

  await page.screenshot({ path: 'screenshots/example.png' });
});

test('Screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000/');


  page.getByRole('link', { name: 'Deploy now' }).click();

  await page.screenshot({ path: 'screenshots/vercel.png' });
});