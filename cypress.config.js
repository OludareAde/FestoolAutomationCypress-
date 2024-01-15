const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		viewportHeight: 1000,
		viewportWidth: 1000,
		baseUrl: "https://www.festoolcanada.com/",
		experimentalStudio: true,
		experimentalOriginDependencies: true,
	},
});
