/// <reference types="cypress" />
context("Uğload", () => {
    it("File Upload", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get("(//input[@id='exampleInputFile'])").attachFile(
            "fixtures/upload/api.jpg"
        );
    });
});