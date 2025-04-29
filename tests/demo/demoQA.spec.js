const {test,expect} = require('@playwright/test')
const {DemoQA} = require('../../pages/demoQAElements')

let login; 

// test.beforeEach(async({page})=> {
//     login = new DemoQA(page);
//     await login.loginDemo();
// })

//verify title of the page
test("Validate form is submitted", async ({page}) =>{
    login = new DemoQA(page);
    await login.loginDemo();
    await expect(page).toHaveTitle('DEMOQA');
})

test ("DemoQA form",async({page})=>{
    login = new DemoQA(page);
    await login.loginDemo();
    await login.fillNameAndEmail('himanshu','agarwal','h111@gmail.com');
    await login.selectGender('Male');
    await login.mobile('1234566789');
    await login.dateOfBirth('01 Jan 1990');
    await login.enterSubject('testing');
    await login.hobbies();
    await login.uploadPicture();
    await login.currentAddress();
    await login.stateAndCity('Uttar Pradesh','Lucknow');
    await login.submit();
})

test.only ("alert", async({page})=>{
    await page.on('dialog',async dialog => {
        console.log('alert message',dialog.message)
        await dialog.accept();
    });
    login = new DemoQA(page);
    await login.alertPage();
    await page.click('#alertButton')
});