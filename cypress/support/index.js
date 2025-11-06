// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

  on('file:preprocessor', cucumber());

};
const { defineConfig } = require('cypress')

module.exports = defineConfig({

  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/integration/**',

  },

  cypress: {

    setupNodeEvents(on, config) {

      return require('./cypress/support/index.js')(on, config)

    },

    specPattern: 'cypress/integration/**.feature',

    supportFile:false

  },

})

// Alternatively you can use CommonJS syntax:
// require('./commands')
