/// <reference types="cypress" />
context("Login senaryosu", () => {
    it("Ranorex ile Login senaryosu", () => {
        cy.visit(Cypress.config("baseUrl"));
        cy.get("input[name='username']").type("cypress_test_1@gmail.com");
        cy.get("input[name='password']").type("admin_123");
        cy.get("input[name='submit']").click();
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get(":nth-child(3) > .btn").click();
        cy.get("#snackbar").should("be.visible");
        cy.get("#snackbar").should(
            "include.text",
            "Bu element kısa süre sonra kaybolacaktır."
        );
        cy.get("#snackbar").should("not.be.visible");
    });
});