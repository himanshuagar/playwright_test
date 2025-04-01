const {test,expect} = require ('@playwright/test')

test ("test alert", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // enabling dialoge window
    page.on('dialog', async dialog => {
        expect (dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })
    await page.locator("//button[@id='alertBtn']").click();
})


test("confirmation dialog", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        await dialog.dismiss();
    })
    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");
})

test("prompt", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        await dialog.accept('himanshu');
    })
    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello himanshu! How are you today?");
})
