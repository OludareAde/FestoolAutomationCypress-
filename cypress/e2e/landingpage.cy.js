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

	it("sets and get a token in local storage", () => {
		cy.setLocalStorage("token", "ab2343!x%99");
		cy.getLocalStorage("token").should("eq", "ab2343!x%99");
		
		
			
	});

	it("get the local storage value for the version", () => {
		cy.getLocalStorage("uc_ui_version").should("eq", "3.34.1").then(()=>
		{
			console.log(localStorage.getItem("uc_ui_version"));
		})
		
	});

	it("search for a product by name", () => {	
		consentTerms.acceptAll();	
		cy.get(".meta-navigation__item-icon").eq(2).click();
		cy.get(".main-search-field")
			.find("input")
			.eq(0)
			.type("Cordless table saw CSC SYS 50 EBI-Basic{enter}", {
				sensitive: true,
			});
        cy.url().should("include", `${encodeURIComponent("Cordless table saw CSC SYS 50 EBI-Basic")}`);
		cy.url().should(
			"include",
			Cypress.config().baseUrl + "search-results-page?"
		);
		cy.get('.current').findByText('Search Results Page').should('be.visible')
	})
});
