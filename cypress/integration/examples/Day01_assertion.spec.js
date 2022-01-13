/// <reference types="cypress" />
context("ilk testimiz", () => {
    it("Visit", () => {
        cy.visit(Cypress.config("baseUrl"));
    });

    it("URL doğrulama", () => {
        cy.url().should("include", Cypress.config("baseUrl"));
        cy.get("body > form > div > h1").should("have.text", "Dashboard");
    });
    it("Protocol doğrulama", () => {
        cy.location("protocol").should("eq", "https:");
    });
});