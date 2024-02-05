import newToolsPage from "../../pages/newToolsPage";
import consentTerms from "../../helper/consentTerms";

describe("The title section test suites", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.findByText("Show all new products").click();
	});

	it("Check it return new tools page", () => {
		newToolsPage.getTitle();
	});

	it("check the url of the new tools page", () => {
		cy.url().should("include", "/products/new-tools"); //assert the url using API 'url'
		cy.location("pathname").should("equal", "/products/new-tools"); //assert the url using API 'location'
	});
});
