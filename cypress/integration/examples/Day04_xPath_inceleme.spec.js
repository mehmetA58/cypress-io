/// <reference types="cypress" />
context("xPath inceleme", () => {
    it("Visit", () => {
        cy.visit(Cypress.config("baseUrl"));
        cy.get("input[name='username']").type("cypress_test_1@gmail.com");
        cy.get("input[name='password']").type("admin_123");
        cy.get("input[name='submit']").click();
    });
});