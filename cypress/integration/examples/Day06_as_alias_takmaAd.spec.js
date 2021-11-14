/// <reference types="cypress" />
context("as,alias,takmaAd exercise", () => {
    it.skip("Checkbox", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get("[type='checkbox']")
            .check("option1", { force: true })
            .should("be.checked");
    });
    it("Checkbox", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get("[type='checkbox']").as("Option1");
        cy.get("@Option1").check("option1", { force: true });
        cy.get("@Option1").should("be.checked");
    });
});