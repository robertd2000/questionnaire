// ***********************************************************
// This example support/e2e.ts is processed and
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
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
describe("My First Test", () => {
  it("Visits the questionnaire", () => {
    cy.visit("http://10.107.63.101:5173/questionnaire/");

    for (let i = 0; i < 5; i++) {
      cy.get('[data-cy="answer"]').first().click();
      cy.contains("Send").click();
    }

    cy.contains("Your score");
  });
});
