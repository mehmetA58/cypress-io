/// <reference types="cypress" />
context("iFrame", () => {
    const getIFrameDocument = () => {
        return cy.get("iframe#FileFrame").its("0.contentDocument").should("exist");
    };
    const getIFrameBody = () => {
        return getIFrameDocument()
            .its("body")
            .should("not.be.undefined")
            .then(cy.wrap);
    };

    it("iFrame handle Testi", () => {
        cy.visit("https://test.iyikisordun.com/pages/UI/ribbons.html");
        getIFrameBody().find("#name_").should("have.text", "Cypress_");
        getIFrameBody().find("#surname_").should("have.text", "Test");
    });
});