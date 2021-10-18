/// <reference types="cypress" />
context("Login senaryosu", () => {
    it("Ranorex ile Login senaryosu", () => {
        cy.visit(Cypress.config("baseUrl"));
        cy.get("input[name='username']").type("cypress_test_1@gmail.com");
        cy.get("input[name='password']").type("admin_123");
        cy.get("input[name='submit']").click();
        cy.get(".bg-info.small-box > .inner > h3").should("have.text", "150");
    });
});