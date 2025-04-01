class LoginPage
{

    constructor(page)
    {
        this.page =page;
        this.username = page.locator("[placeholder='Username']");
        this.password = page.locator("[placeholder='Password']");
        this.loginButton=page.locator("button[type='submit']");
    }
    async gotoLoginPage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async loginTOApplication()
    {
        await this.username.fill('Admin');
        await this.password.fill("admin123");
        await this.loginButton.click();
    }    
}
module.exports=LoginPage;