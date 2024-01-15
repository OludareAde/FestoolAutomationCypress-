class consentTerms {
	acceptAll() {
		cy.get("#usercentrics-root").then(($el) => {
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
				}else{return false}
			} catch {
            
            }
		});
	}
}

module.exports = new consentTerms();
