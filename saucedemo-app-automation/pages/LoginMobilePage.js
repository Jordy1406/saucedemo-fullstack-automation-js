class LoginMobilePage {
    constructor(driver) {
        this.driver = driver;
    }

    get usernameField() { return this.driver.$('~test-Username'); }
    get passwordField() { return this.driver.$('~test-Password'); }
    get loginBtn() { return this.driver.$('~test-LOGIN'); }
    get btnAddCart() { return this.driver.$('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); }
    get iconCart() { return this.driver.$('~test-Cart'); }

    async login(user, pass) {
        await this.usernameField.setValue(user);
        await this.passwordField.setValue(pass);
        await this.loginBtn.click();
    }

    async addItemToCart() {
        await this.btnAddCart.click();
        await this.iconCart.click();
    }
}
module.exports = LoginMobilePage;