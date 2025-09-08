import {test,expect} from '@playwright/test'

test('validate Assertions', async ({page})=>{

    //toHaveURL()
   await page.goto("https://demo.nopcommerce.com/register");
   await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

   //toHaveTitle()
   await expect(page).toHaveTitle('nopCommerce demo store. Register');
  
   // toBeVisible()
   const logo = await page.getByAltText('nopCommerce demo store');
   await expect(logo).toBeVisible();


   //toBeEnabled()
   await expect(await page.locator('#small-searchterms')).toBeEnabled;

   //toBeChecked()
    await expect(await page.locator('#Newsletter')).toBeChecked;

    //toHaveAttribute()
    await expect(await page.locator('#register-button')).toHaveAttribute('type','submit')

    //toHaveText()
    await expect(await page.locator('//div[@class="page-title"]')).toHaveText('Register');

    //toContainText()
    await expect(await page.locator('//div[@class="page-title"]')).toContainText('Regi');

    //toHaveValue()
    await expect(await page.locator('#FirstName')).toHaveValue('');

    //toHaveCount()
    const count = await page.locator('#customerCurrency option');
    await expect(count).toHaveCount(2);
})