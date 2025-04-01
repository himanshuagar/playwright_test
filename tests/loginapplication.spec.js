const {test, expect} = require('@playwright/test')

const mytest = test.extend ({
    loggedIn: async ({page}, use) => {
        console.log("setup")
        

    } 
})

test ("login to application", async  ({page})  => {
    await page.goto("https://www.google.com") ;
});