/// <reference types="cypress" />
context("Timeout", () => {
    Cypress.config("defaultCommandTimeout", 3000);
    it("Default timeout degistirme", () => {
        cy.get(".m-0.text-darka").should("have.text", "Dashboard");
    });
});