///<reference types="cypress"/>


describe(
	"The tests suite describe the tests in the new tools section of the page",
	() => {
		beforeEach(() => {
			cy.visit("/");
		});

		it('Check the URL of "Show all new products"', () => {
			cy.contains("Show all new products")
				.should("have.attr", "href", "https://www.festoolcanada.com/products/new-tools");
		});
	}
);
