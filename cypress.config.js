const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    video: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://coffee-cart.app",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});
