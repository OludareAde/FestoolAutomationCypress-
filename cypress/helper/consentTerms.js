class consentTerms {
	acceptAll() {
		cy.get("#usercentrics-root")
			.shadow()
			.find('[data-testid="uc-accept-all-button"]')
			.then((el) => {
				try {
					if (el) {
						cy.get("#usercentrics-root")
							.shadow()
							.find('[data-testid="uc-accept-all-button"]')
							.click();
					} else {
						cy.log(false);
					}
				} catch {}
			});
	}
}

module.exports = new consentTerms();
