
import{test, expect} from '@playwright/test'

test('Validate Radio Button', async ({page})=>{

    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    await page.locator('#pension').check();
    
    await expect(await page.locator('#pension')).toBeChecked;
    //await expect(await page.locator('#pension')).isChecked().toBeTruthy();
    await page.waitForTimeout(10000);


})