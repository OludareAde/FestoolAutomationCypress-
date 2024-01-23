import consentTerms from "../helper/consentTerms";
describe("Navigating to the landing page", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Navigate landing page", () => {
		consentTerms.acceptAll();
	});

	it("Check that Festool profile icon exist", () => {
		cy.get(".meta-navigation__item-icon")
			.find("img")
			.eq(0)
			.should("have.attr", "src")
			.should("contains", "festool_profile.svg");
	});

	it("Check that Festool wishlist icon exist", () => {
		cy.get(".meta-navigation__item-icon")
			.find("img")
			.eq(1)
			.should("have.attr", "src")
			.should("contains", "festool_wishlist.svg");
	});

	it("Check that Festool search icon exist", () => {
		cy.get(".meta-navigation__item-icon")
			.find("img")
			.eq(2)
			.should("have.attr", "src")
			.should("contains", "festool_search.svg");
	});

	it("Check if the Accessories menu exists", () => {
		cy.get("#page").within(() => {
			cy.get(".main-navigation").within(() => {
				cy.get(".main-navigation__list").find("li").contains("Accessories");
			});
		});
	});
});
