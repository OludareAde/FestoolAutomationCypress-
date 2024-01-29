import homePage from "../pages/homePage";
import consentTerm from "../helper/consentTerms";

describe("This will Check that user can access the login page", () => {
	it("Check - user can access login page ", () => {
		cy.visit("/");
		consentTerm.acceptAll();
		homePage.clickOnLoginButton();
		homePage.clickOnLoginToMyFestool();
	});

	it("Retrieve the consent API values", () => {
		cy.visit("/");
		consentTerm.acceptAll();
		cy.wait(2000).then(() => {
			fetch("https://api.usercentrics.eu/translations/translations-en.json")
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
				});
		});
	});
});
