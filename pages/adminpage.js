class Admin {
    constructor(page){
        this.page = page;
        this.adminSection = page.getByRole('link', { name: 'Admin' });
        this.adminUsername = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
        this.adminUserRole = page.locator('.oxd-table-card > .oxd-table-row > div:nth-child(3) > div')
    }

    async searchUser(){
        await this.adminSection.click()
        await this.adminUsername.fill('admin')
    }
}
module.exports=Admin