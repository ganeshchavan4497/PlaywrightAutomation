import{test,expect} from '@playwright/test'

test('Locators validation',async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");
   await page.locator('id=login2').click();
   await page.locator('#loginusername').fill("ganeshchavan");
   await page.locator('#loginpassword').fill("admin");
   page.locator('//button[text()="Log in"]').click();

   const logout = await page.locator('//a[text()="Log out"]');
   await expect(logout).toBeVisible();


})