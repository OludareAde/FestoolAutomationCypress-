import createAccountPage from "../pages/createAccountPage";
import homePage from "../pages/homePage";

describe("This are actions that relates to creating account", () => {
	it("Create a new account", () => {
		cy.visit("https://login.festool.com/Registration/Register");
		cy.get("#usercentrics-root").then(($el) => {
			if ($el.length === 1) {
				cy.get("#usercentrics-root")
					.shadow()
					.find('[data-testid="uc-accept-all-button"]')
					.click();
			}
		});

		createAccountPage.createAMyFestoolAccount();
	});
});
