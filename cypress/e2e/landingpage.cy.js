import consentTerms from "../helper/consentTerms";
describe("Navigating to the landing page", () => {
	it("Navigate landing page", () => {
		cy.visit("/");
		consentTerms.acceptAll();
	});
});
