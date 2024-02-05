class consentTerms {
	acceptAll() {
		cy.get("#usercentrics-root")
			.shadow()
			.find('[data-testid="uc-accept-all-button"]')
			.as("btn")
			.should("exist")
			.then((el) => {
				if (el) {
					cy.get("@btn").click();
				} else {
					cy.log("element not present");
				}
			});

		/*			if (
				cy
					.get("#usercentrics-root")
					.shadow()
					.find('[data-testid="uc-accept-all-button"]')
			) {
				cy.get("#usercentrics-root")
					.shadow()
					.find('[data-testid="uc-accept-all-button"]')
					.click();
			} else {
				cy.log(false);
			}*/
	}
}

module.exports = new consentTerms();
