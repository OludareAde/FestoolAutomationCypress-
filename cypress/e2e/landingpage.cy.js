describe("Navigating to the landing page", () => {
	it("Navigate landing page", () => {
		cy.visit("/");
		cy.get("#usercentrics-root")
			.shadow()
			.find('[data-testid="uc-accept-all-button"]')
			.click();
	});
});
