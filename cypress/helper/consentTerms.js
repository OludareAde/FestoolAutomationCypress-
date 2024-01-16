class consentTerms {
	acceptAll() {
		cy.get("#usercentrics-root").shadow().find('[data-testid="uc-accept-all-button"]').then(($el) => {
			try {
			if (
					$el.length &&
					cy
						.get("#usercentrics-root")
						.shadow()
						.find('[data-testid="uc-accept-all-button"]')
						.should("exist")
				) {
					cy.get("#usercentrics-root")
						.shadow()
						.find('[data-testid="uc-accept-all-button"]')
						.click();
				}else{}
			} catch {
            
            }
		});
	}
}

module.exports = new consentTerms();
