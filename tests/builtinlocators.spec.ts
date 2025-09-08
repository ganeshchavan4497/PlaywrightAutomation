import {test, expect} from '@playwright/test'

test('Validate Buit in Locators', async ({page})=>{
   await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   //Use getByAltText() Method
   const img = await page.getByAltText('company-branding');
   await expect(img).toBeVisible();

   //Use getByPlaceholder() Method
   page.waitForSelector('input[placeholder="Username"]')
   await page.getByPlaceholder('Username').fill("Admin");
   page.waitForSelector('input[placeholder="Password"]')
   await page.getByPlaceholder('Password').fill("admin123");

      //Use getByRole() Method
     // await page.getByRole('button', { type:'submit'}).click();
      await page.locator('button[type="submit"]').click();


      //Use getByText() Method
     const loginname=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
     console.log(loginname);
    // await expect(await page.getByText(loginname)).toBeVisible();
    //await expect(loginname).toBeVisible();































})