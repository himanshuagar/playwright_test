const {test, expect} = require('@playwright/test');
const LoginPage = require('../../pages/loginpage');
const Admin = require('../../pages/adminpage')


let login 

//login before all the test 
test.beforeEach(async ({page}) => {
     login = new LoginPage(page);
     await login.gotoLoginPage();
     await login.loginTOApplication();
})

// verify title of login page
test ("Verify application title", async ({page}) => {
     await expect(page).toHaveTitle("OrangeHRM");
})

//test to verify if username is "dhoni_07" then userrole is "ESS" 
test("verify user role", async ({page}) => {
     const admin = new Admin(page);
     await admin.searchUser();
     const userRoleText = await admin.adminUserRole.first().innerText();
     expect(userRoleText).toBe("Admin");
})

// ******* Practice *******//
// test about dropdown -- done 
// test case for checkbox  -- done 
// Mouse hover actions -- done
// test case for handling multiple windows
// checking if element is displayed 
// Validate URL after navigation
// Close and accept the alert, popup handle and context browser. What is diff between newpage and context page?  
// use test describe 
// skip a particular test in playwright. -- done 
// integrate with CI CD pipeline 
// perform API test using playwright

//*****Practice interview *//
// how to compare screenshot in playwright --done 
// types of wait supported in playwright. How to use explicit wait in playwright ?
// when do we need to use manually use wait and what type of wait we have to use ?
// how to you use logging state for multiple scenario. how to generete authntication cookies.
// how to run test paralllely and sequentially. By default how playwright runs test in a file. 
// which methods used for test report/ logs / creating videos ( how to use trace). how to open html report.
// what is chromium and what all browser is supported in playwright 
// how to perform cross browser testing and set in cofig file.
// learn Aria option in playwright ( getByRole , getByLabel, getByText) 
// how to maximize viewports. 
// name few exception faced in playwright.
// use assertion ( soft and hard assertion)
// multiple locators. How to handle?

