class createAccountPage {
	createAccountPage_Elements = {
		selectCountry: () => cy.get('select[id="SelectedCulture"]'),
		email: () => cy.get("#Email"),
		password: () => cy.get("#NewPassword"),
		termsofuse: () => cy.get("#TermsAndConditionsAcceptance"),
		nextbutton: () => cy.get("button").contains("Next"),
		returntologin: () => cy.findAllByText("Return to login"),
	};

	createAMyFestoolAccount(obj) {
		this.createAccountPage_Elements.selectCountry().select(obj.country);
		this.createAccountPage_Elements.email().type(obj.email);
		this.createAccountPage_Elements.password().type(obj.password);
		this.createAccountPage_Elements.termsofuse().click();
		this.createAccountPage_Elements.nextbutton().click();
	}

	backToLogin() {
		this.createAccountPage_Elements.returntologin().click();
	}

	verifyTheCheckmark() {
		cy.get(".main-container").then((el) => {
			if (el) {
				cy.get(".main-container")					
					.find("svg")
					.should("have.attr", "fill")
					.should("contains", "currentColor");
			}
		});
	}
}

module.exports = new createAccountPage();
