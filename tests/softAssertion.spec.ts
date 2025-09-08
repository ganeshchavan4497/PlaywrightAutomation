import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  const logo =await page.getByAltText('nopCommerce demo store')
  await expect.soft(logo).toBeVisible();
  await  expect.soft(page).toHaveURL('https://demo.nopcommerce.');
  await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');

  const drop=await page.$$('#customerCurrency');
  await page.waitForSelector('#customerCurrency');
  for(const drp of drop){
    const name=await drp.textContent();
    console.log(name);
  }

});