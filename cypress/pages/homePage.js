class homePage {
	homepageelements = {
		loginButton: () => cy.get(".meta-navigation__item-icon").eq(0),
		CreateYourMyFestoolAccount_link: () =>
			cy.get("a").contains("Create your MyFestool account!"),
		loginToMyFestool: () => cy.get("a").contains("Log in to MyFestool"),
	};

	clickOnLoginButton() {
		this.homepageelements.loginButton().click();
	}
	clickOnLoginToMyFestool() {
		this.homepageelements.loginToMyFestool().click({force:true});
	}

	clickOn_CreateYourMyFestoolAccount() {
		this.homepageelements.CreateYourMyFestoolAccount_link().click();
	}
}

module.exports = new homePage();
