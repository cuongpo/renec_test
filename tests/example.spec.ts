import { test, expect } from '../fixtures';

test('example test', async ({ page }) => {
  await page.goto('https://chrome.google.com/webstore/detail/demon-wallet/mdjmfdffdcmnoblignmgpommbefadffd');
  await page.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#/create-wallet');
  await page.locator('div').filter({ hasText: /^Secret Recovery Phrase or Private Key$/ }).first().click();
  // Scroll the dialog to the bottom.

  await page.locator('.term-of-use-dialog__body').first().click();
  await page.keyboard.press('Control+End');


  
  await page.getByRole('button', { name: 'I agree, please continue' }).click();
  await page.getByPlaceholder('Enter password', { exact: true }).click();
  await page.getByPlaceholder('Enter password', { exact: true }).fill('westeros');
  await page.getByPlaceholder('Enter password again').click();
  await page.getByPlaceholder('Enter password again').fill('westeros');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.locator("#backup-passphrase").click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('div').filter({ hasText: /^123456789101112131415161718192021222324$/ }).locator('path').nth(4).click();
  await page.getByRole('button', { name: 'Copy' }).click();
  await page.getByText('I saved my Secret Recovery Phrase').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto("https://nemo.renec.org/vi");
  await page.getByRole('button', { name: 'Connect wallet' }).click();
  await page.getByRole('button', { name: 'Demon icon Demon Detected' }).click();

  await page.goto('chrome-extension://mdjmfdffdcmnoblignmgpommbefadffd/index.html#/connect-app?title=NemoSwap%20|%20DEX%20tr%C3%AAn%20RENEC%20Blockchain&url=https://nemo.renec.org&logo=https://nemo.renec.org/favicon.ico&requestId=1&fromWindowId=367316001');
  await page.getByRole('button', { name: 'Connect' }).click();
  await page.goto("https://nemo.renec.org/vi");
  await page.close();
  
});

