const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4wun2r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
