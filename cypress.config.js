const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		viewportHeight: 1600,
		viewportWidth: 1600,
		baseUrl: "https://www.festoolcanada.com/",
		experimentalStudio: true,
		experimentalOriginDependencies: true,
		includeShadowDom: true,
		defaultCommandTimeout: 10_000
	},
});
