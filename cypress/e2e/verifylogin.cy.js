import homePage from "../pages/homePage";
import consentTerm from "../helper/consentTerms";

describe("This will Check that user can access the login page", () => {
	it("Check - user can access login page ", () => {
		cy.visit("/");
		consentTerm.acceptAll();    
		homePage.clickOnLoginButton();
		homePage.clickOnLoginToMyFestool();
	});

})

