import consentTerms from "../helper/consentTerms";

describe("Search by trade section", () => {
	beforeEach(() => {
		cy.visit("/");
		consentTerms.acceptAll();
	});
	it("Check that Search by Trade section is present", () => {
		cy.get(".link-dropdown").should("exist");
	});

	it("Check if Search by trade headline is present", () => {
		cy.get(".link-dropdown")
			.find("h1")
			.findAllByText("Search by trade")
			.should("exist");
	});
	it("Check if Search by trade description is present", () => {
		cy.get(".link-dropdown").within(() => {
			cy.get(".link-dropdown__copy")
				.find("p")
				.findAllByText("Application areas for Festool power tools");
		});
	});
});
