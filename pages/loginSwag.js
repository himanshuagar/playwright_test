const { expect } = require("@playwright/test");

class LoginSwag
{
    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator ('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidMessage = page.locator('//h3[contains(text(),"Epic sadface")]');
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCart = page.locator('//a[@class="shopping_cart_link"]');
        this.checkoutbtn = page.getByRole('button' ,{name:'checkout'});
        this.infoFirstName = page.locator('#first-name');
        this.infoLastname = page.locator('#last-name');
        this.infoZip = page.locator('#postal-code');
        this.continue = page.locator('#continue');
        this.total = page.locator('[data-test="subtotal-label"]');
        this.dropdown = page.locator('[data-test="product-sort-container"]');
        this.inventoryItemPrice = page.locator('[data-test = "inventory-item-price"]')
    }

    async gotoLoginPage(url) {
        await this.page.goto(url);
    }
    async loginTOApplication(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async checkout ()
    {
        await this.addToCart.click();
        await this.shoppingCart.click();
        await this.checkoutbtn.click();
        await this.infoFirstName.fill('himanshu');
        await this.infoLastname.fill('agarwal');
        await this.infoZip.fill('226002');
        await this.continue.click()
    }
    async price () {
        const subTotalPrice =  await this.total.textContent();
        const pricevalue = await subTotalPrice.split("$")[1];
        console.log("pricevalue",pricevalue)
        return pricevalue
    }
    async dropDownPrice() {
        await this.dropdown.selectOption({ label: 'Price (high to low)' });
        const selectedValue = await this.dropdown.inputValue();
        console.log('Selected Value: ', selectedValue);
        expect(selectedValue).toBe('hilo');
    }
}
module.exports = {LoginSwag};