import { test, Page } from '@playwright/test';
import path from 'path';

const authFile: string = path.join(__dirname, '../playwright/.auth/user.json');

test('authenticate with valid credentials', async ({ page }: { page: Page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
  await page.context().storageState({ path: authFile });
});



