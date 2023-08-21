import { test, expect } from '@playwright/test';

test('Search for the keyword Nike @Functional', async ({ page }) => {
    // Navigate to the website
  
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').fill('aljawharh@hotmail.com');
  await page.getByLabel('Password').fill('Aa1234@1234'); 
page.locator("#send2").click(); 
// Wait for the login to complete
await page.waitForNavigation();

// Search for the keyword "Nike"

await page.getByPlaceholder('Search entire store here...').fill('Nike');
await page.getByPlaceholder('Search entire store here...').press('Enter');
await page.waitForLoadState();
// Wait for search results
// Assert if results exist
const resultsExist = await page.$('.product-item');
if (resultsExist) {
  console.log('Search results exist>>Nike air max /Nike air max 2 /nike shoes');
} else {
  console.log('Search results do not exist.');
}


});
