const {test, expect} = require('@playwright/test')


test ("verify drop down", async  function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await  page.locator("#state").selectOption({label:"Goa"})
})