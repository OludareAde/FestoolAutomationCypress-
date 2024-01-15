import homePage from "../pages/homePage";

describe("This will Check that user can access the login page", () => {
	it("Check - user can access login page ", () => {
		cy.visit("/");
		cy.get("#usercentrics-root").then(($el) => {
			if ($el.length &&
				cy.get("#usercentrics-root")
					.shadow()
					.find('[data-testid="uc-accept-all-button"]').should('exist')){
                        cy.get("#usercentrics-root")
					    .shadow()
					    .find('[data-testid="uc-accept-all-button"]')
					    .click();
                    }
					
			}
		);
		homePage.clickOnLoginButton();
		homePage.clickOnLoginToMyFestool();
	});
});
