import{test, expect} from '@playwright/test'
test('Checking and Unhecking Checkboxes', async({page})=>{

   await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
   
   //Checking Single Checkbox
//    await page.locator('#passport').check();
//    await expect(await page.locator('#passport')).toBeChecked();

  //Checking Multiple Checkbox
  const multicheck= [ await page.locator('#passport'), 
   await page.locator('#passport'),
   await page.locator('#studentid'),
   await page.locator('#drivinglicense')];

   for(const mul of multicheck){
    await mul.check();
    expect(mul).toBeChecked();
   }

   await page.waitForTimeout(5000);

//Unchecking Multiple Checkbox
    for(const mul of multicheck){
    await mul.uncheck();
    expect(mul).not.toBeChecked();
   }

   await page.waitForTimeout(5000);



    
})