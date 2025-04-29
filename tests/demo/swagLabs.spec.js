const {test,expect} = require('@playwright/test')
const {LoginSwag} = require('../../pages/loginSwag')

let login

test.beforeEach(async ({page})=>{
    login = new LoginSwag(page);
    await login.gotoLoginPage("https://www.saucedemo.com/")
});

test("login test with valid credentials", async ({page})=>{
    await login.loginTOApplication('standard_user','secret_sauce');
    await expect(page).toHaveTitle("Swag Labs")
});

test("login test with invalid credentials", async ({page})=>{
    await login.loginTOApplication('standard_user','12345');
    await expect(login.invalidMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

test("checkout test", async({page})=>{
   await login.loginTOApplication('standard_user','secret_sauce');
   await login.checkout();
   const price = await login.price();
   await expect(price).toBe('29.99')
});

test ("dropdown price and validate the price", async ({page})=>{
    await login.loginTOApplication('standard_user','secret_sauce');
    await login.dropDownPrice()
})
