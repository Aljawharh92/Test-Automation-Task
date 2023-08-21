import { test, expect } from '@playwright/test';

//If the user wants to include test case under one suite after {import} should write the below(describe):
test.describe('@login', () => {
test('Ensure that the guest user can create an account @smoke', async ({ page }) => {
  // visiting the website
  await page.goto('https://magento.softwaretestingboard.com/');
  // starting  to create an Account
  //Choosing a locator(getByRole)  to locate by explicit and implicit accessibility attributes.
  await page.getByRole('link', { name: 'Create an Account' }).click();
  //Choosing a locator (getByLabel)to locate a form control by associated label's text.
  await page.getByLabel('First Name').fill('Aljawharh');
  await page.getByLabel('Last Name').fill('Alzuhairy');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Aa1234@1234');
  await page.getByLabel('Confirm Password').fill('Aa1234@123');
  await page.getByRole('button', { name: 'Create an Account' }).click();

//Login
  test('Ensure that the account is registered and the user can be login @smoke', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByLabel('Email').fill('aljawharh@hotmail.com');
    await page.getByLabel('Password').fill('Aa1234@1234'); 
  page.locator("#send2").click();   
  await page.waitForURL('https://magento.softwaretestingboard.com/');
  expect(page.getByRole('button', { name: 'Welcome, Aljawharh Alzuhairy!' }));
  
  });
});
});