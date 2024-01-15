class createAccountPage {
	createAccountPage_Elements = {
		selectCountry: () => cy.get('select[id="SelectedCulture"]'),
		email: () => cy.get("#Email"),
		password: () => cy.get("#NewPassword"),
		termsofuse: () => cy.get("#TermsAndConditionsAcceptance"),
		nextbutton: () => cy.get("button").contains("Next"),
	};

	createAMyFestoolAccount() {
		this.createAccountPage_Elements.selectCountry().select("en-US");
		this.createAccountPage_Elements.email().type("darryadedi@gmail.com");
		this.createAccountPage_Elements.password().type("Password!2");
		this.createAccountPage_Elements.termsofuse().click();
		this.createAccountPage_Elements.nextbutton().click();
	}
}

module.exports = new createAccountPage();
