import createAccountPage from "../pages/createAccountPage";
import consentTerms from "../helper/consentTerms";


describe("This are actions that relates to creating account", () => {
	it("Create a new account", () => {
		cy.visit("https://login.festool.com/Registration/Register");
		consentTerms.acceptAll();
        createAccountPage.createAMyFestoolAccount();
		});

		
	});

