function select(locator, expectedText) {
  cy.get(locator).should("have.text", expectedText);
}
