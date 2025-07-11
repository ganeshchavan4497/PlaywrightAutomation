const {test, expect}=require ('playwright/test');

test('title',async ({page})=>{
await page.goto("https://demoblaze.com/index.html");
const pageTitle = await page.title();
console.log('page title is',pageTitle);
await expect(page).toHaveTitle('STORE');
const pageURL=await page.url();
await expect(page).toHaveURL('https://demoblaze.com/index.html');
await page.close();

})