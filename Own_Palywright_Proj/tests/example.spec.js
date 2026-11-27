const { test, expect } = require('@playwright/test');
const GooglePage = require('../pages/GooglePage');

test('renders page content', async ({ page }) => {
  await page.setContent('<h1>Hello, Playwright!</h1>');
  await expect(page.getByRole('heading', { name: 'Hello, Playwright!' })).toBeVisible();
});

test('opens Google and waits for five seconds', async ({ page }) => {
  const googlePage = new GooglePage(page);
  await googlePage.open();
  await page.waitForTimeout(5000);
});
