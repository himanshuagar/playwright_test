class DemoQA{
    constructor(page){
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.selectGenderLocator = page.locator('//label[text()="Male"]')
        this.mobileNumber = page.locator('#userNumber');
        this.dateOfBirthLocator = page.locator('#dateOfBirthInput');
        this.subjectInput = page.locator('#subjectsInput');
        this.hobbiesLocator = page.locator('//label[text()="Sports"]');
        this.choosePicture = page.locator('#uploadPicture');
        this.address = page.locator('#currentAddress');
        this.stateState = page.locator("//div[text()='Select State']");
        this.selectCityLocator = page.locator("//div[text()='Select City']");
        this.submitLocator = page.locator('#submit');
    }

    async loginDemo(){
        await this.page.goto("https://demoqa.com/automation-practice-form");
    }

    async alertPage(){
        await this.page.goto("https://demoqa.com/alerts");
    }

    async fillNameAndEmail(firstName,lastName,Email){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(Email);
    }

    async selectGender(gender = 'Male') {
        await this.selectGenderLocator.check();
    }    

    async mobile(phoneNumber){
        await this.mobileNumber.fill(phoneNumber);
    }
    async dateOfBirth(date){
        await this.dateOfBirthLocator.fill(date);
    }
    async enterSubject(text) {
        await this.subjectInput.fill(text);
        await this.page.keyboard.press('Enter');
    }
    async hobbies(){
        await this.hobbiesLocator.click();
    }
    async uploadPicture(){
        await this.choosePicture.setInputFiles('/Users/hagarwal/Downloads/plot1.jpeg');
    }
    async currentAddress(addr){
       await this.address.fill(addr);
    }
    async stateAndCity(state,city){
        await this.stateState.click();
        await this.page.locator(`text=${state}`).click();
        await this.selectCity.click();
        await this.page.locator(`text=${city}`).click();
    }

    async submit(){
        await this.submitLocator.first().click();
    }

}

module.exports = { DemoQA };