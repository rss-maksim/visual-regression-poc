import { test, takeSnapshot } from "@chromatic-com/playwright"; 

test('has title', async ({ page }, testInfo) => {
  await page.goto('https://nextjs.org/');

  // await page.screenshot({ path: 'screenshots/example.png' });

  page.getByRole('link', { name: 'Get Started' }).click();

  await takeSnapshot(page, 'After click', testInfo); 
});

test('Screenshot', async ({ page }, testInfo) => {
  await page.goto('https://nextjs.org/');


  // page.getByRole('link', { name: 'Learn Next.js' }).click();

  await takeSnapshot(page, testInfo); 

  page.getByRole('link', { name: 'Get Started' }).click();

  await takeSnapshot(page, 'After click', testInfo); 
  // await page.screenshot({ path: 'screenshots/vercel.png' });
});