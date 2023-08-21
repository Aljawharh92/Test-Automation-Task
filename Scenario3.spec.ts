
import { test, expect } from '@playwright/test';


test('Ensure that  the order is completed and the payment details @smoke', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').fill('aljawharh@hotmail.com');
  await page.getByLabel('Password').fill('Aa1234@1234'); 
  page.locator("#send2").click(); 
  await page.waitForNavigation();

  // Wait for login to complete and navigate to cart

  await page.getByText('My Cart').click();
 //Navigate to cart
  await page.goto('https://magento.softwaretestingboard.com/checkout/cart/');
// click (Proceed to Checkout) 
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  await page.waitForLoadState();
 
  await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');


  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState();

  await page.goto('https://magento.softwaretestingboard.com/checkout/#payment');
      // Complete the order
  await page.getByRole('button', { name: 'Place Order' }).click();
});
