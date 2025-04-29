let login;
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');

test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await page.goto('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html', {
        waitUntil: 'domcontentloaded', 
        timeout: 60000                  
    });
});

test('handle table', async ({ page }) => {
    await expect(login.headingLocator).toHaveText('Demo Webtable 1 (Static Table)');
    const rowcount = await login.getTableCount();
    await expect(rowcount).toBe(7);
});


test ("validate data", async({page})=> {
    const textExpected = await login.getTableData("Germany");
    expect(textExpected).toBe("Google");
})


// const textExpected = await expect(login.getTableData("Germany"));
// expect(textExpected).toBe("Google");