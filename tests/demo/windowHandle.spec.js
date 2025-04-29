const {test,expect} = require('@playwright/test')

test ("handle new tab", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const pagePromise = context.waitForEvent('page')
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.getByRole("button", {name:'click'}).click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
})

test.only("handle new window", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const pagepromise = context.waitForEvent('page');
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.getByRole("link", {name:'Open New Seperate Windows'}).click();
    await page.getByRole("button", {name:'click'}).click();
    const newPage = await pagepromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
})