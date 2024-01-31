///<reference types="cypress"/>
import consentTerms from "../../helper/consentTerms";

describe("The tests suite describe the tests in the new tools section of the page", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it.skip('Check the URL of "Show all new products"', () => {
		cy.contains("Show all new products").should(
			"have.attr",
			"href",
			"https://www.festoolcanada.com/products/new-tools"
		);
	});

	it("Check the names of the new tools", () => {
		consentTerms.acceptAll();
		cy.get(".product-teaser__infos")
			.find("a")
			.should((item) => {
				if (item.length !== 4) {
					throw new Error("Not equal to 4 elements");
				}
				expect(item[0]).to.contain.text(
					"Cordless table saw CSC SYS 50 EBI-Basic"
				);
				expect(item[1]).to.contain.text(
					"Plunge-cut saw with scoring function TSV 60 KEB-F-Plus"
				);
				expect(item[2]).to.contain.text(
					"Cordless reciprocating saw RSC 18 EB-Basic"
				);
				expect(item[3]).to.contain.text("Dust Extractor CT 25 HEPA CLEANTEC");
			});
	});
});
