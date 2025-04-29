class LoginPage
{

    constructor(page)
    {
        this.page =page;
        this.username = page.locator("[placeholder='Username']");
        this.password = page.locator("[placeholder='Password']");
        this.loginButton = page.locator("button[type='submit']");
        this.headingLocator = page.locator("//span[contains(text(),'Demo Webtable 1')]");
        this.tableNameLocator = page.locator('#customers tbody tr');
    }
    
    async gotoLoginPage(url) {
        await this.page.goto(url);
    }

    async loginTOApplication()
    {
        await this.username.fill('Admin');
        await this.password.fill("admin123");
        await this.loginButton.click();
    } 
    async getTableCount (){
        return await this.tableNameLocator.count();
    }
    async getTableData(name){
        const countTable = await this.tableNameLocator.count();
        
        for (let i = 2; i<=countTable;i++){
            for (let j = 1; j<=3; j++) {
                const tableData = this.page.locator(`#customers tbody tr:nth-child(${i}) td:nth-child(${j})`);
                const text = await tableData.textContent();
                if (text?.trim() === name){
                    const company = this.page.locator(`#customers tbody tr:nth-child(${i}) td:nth-child(1)`)
                    return await company.textContent()
                }
            }
            }
            return null;
        }
}
module.exports=LoginPage;