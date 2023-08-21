import { test, expect } from '@playwright/test';
// Login to website
test('Ensure that the Item is added to the cart@smoke', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').fill('aljawharh@hotmail.com');
  await page.getByLabel('Password').fill('Aa1234@1234'); 
  page.locator("#send2").click();   
  await page.waitForNavigation();

  // Select Men from menuitem 
    await page.waitForURL('https://magento.softwaretestingboard.com/');
    page.getByRole('menuitem').filter({ hasText: /Men/ }).click();
 //Select (Jackets) product 
  await page.getByRole('link', { name: 'Jackets' }).click();
  //Select the second one in the list (Montana Wind Jacket)
  await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();
  // Size Large
  await page.getByLabel('L').click();
  // Red color
  await page.getByLabel('Red').click();
  // click (Add to Cart) button 
  await page.getByRole('button', { name: 'Add to Cart' }).click();
});
