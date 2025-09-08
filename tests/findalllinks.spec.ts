import {test,expect} from '@playwright/test'

test('Find All Links',async ({page}) =>{
    await page.goto("https://demoblaze.com/index.html");
   const links = await page.$$('a');

   for(const link of links){
    const linktest = await link.textContent();
    console.log(linktest);
   }

})