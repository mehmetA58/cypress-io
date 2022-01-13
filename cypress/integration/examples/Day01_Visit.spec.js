/// <reference types="cypress" />
context("ilk testimiz", () => {
    it("Visit", () => {
        cy.visit(Cypress.config("baseUrl"));
    });
});