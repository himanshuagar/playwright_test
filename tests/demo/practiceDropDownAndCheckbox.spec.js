const {test,expect} = require ('@playwright/test')
const Dropdown = require ('../../pages/dropDownAndCheckbox')

 
test("validate dropdown", async ({page}) => {
    const drp = new Dropdown(page);
    await drp.goToDropDown();
    await drp.selectDropDownOption('2');
})


test ("validate checkbox", async ({page}) => {
    const chbox = new Dropdown(page);
    await chbox.goToCheckBox();
    await chbox.checkFirstCheckBox();
    await chbox.checkSecondCheckbox();
    // const checkbox = page.locator(chbox.checkbox1);
    // await expect(checkbox).toHaveScreenshot();
})

test.skip ("validate mouse hover" , async ({page}) =>{
    const mhover = new Dropdown(page);
    await mhover.goToMouseHover();
    await mhover.performMouseHover();
})

