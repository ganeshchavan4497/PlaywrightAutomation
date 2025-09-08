import {test,expect} from '@playwright/test'

test ('Validate inputboxes',async({page})=>{

    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    const Fname=await page.locator('#firstname');
    await expect(Fname).toBeEmpty();
    await expect(Fname).toBeVisible();
    await expect(Fname).toBeEditable();
    await expect(Fname).toBeEnabled();


    await Fname.fill('ganesh');
    await expect(Fname).toHaveValue("ganesh");
    

    await page.waitForTimeout(5000);


})