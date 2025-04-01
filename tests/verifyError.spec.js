const {test, expect } = require('@playwright/test')


test ("valid  and invalid credentials" , async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin45")
    await page.getByPlaceholder("password").type("admin123") 
    await page.locator("button[type='submit']").click()
    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]")
    expect(errorMessage=="Invalid credentials").toBeTruthy()
})