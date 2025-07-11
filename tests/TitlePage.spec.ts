const {test, expect}=require ('playwright/test');

test('title',async ({page})=>{
await page.goto("https://demoblaze.com/index.html");
const pageTitle = await page.title();
console.log('page title is',pageTitle);
expect(page).toHaveTitle('STORE');
const pageURL=await page.url();
expect(page).toHaveURL('https://demoblaze.com/index.html');

})