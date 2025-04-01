class Dropdown{
    constructor (page){
        this.page = page;
        this.dropDownSelector = '#dropdown';
        this.checkbox1 = '#checkbox1';
        this.checkbox2 = '#checkbox2';
        this.mouseHover = page.locator('//div[@id="core"]//div[3]');

    }
    async  goToDropDown(){
        await this.page.goto("https://practice.expandtesting.com/dropdown");
    }
    async goToMouseHover(){
        await this.page.goto("https://practice.expandtesting.com/hovers");
    }
    async goToCheckBox(){
        await this.page.goto("https://practice.expandtesting.com/checkboxes");
    }
    async selectDropDownOption(value) {
        await this.page.selectOption(this.dropDownSelector, value);
    }
    async checkFirstCheckBox(){
        await this.page.check(this.checkbox1);
    }
    async checkSecondCheckbox(){
        await this.page.check(this.checkbox2);
    }
    async performMouseHover(){
        await this.mouseHover.hover(); 
    }
}

module.exports = Dropdown;