/// <reference types="cypress" />

context("Before-After", () => {
    it("1.Widget", () => {
        cy.get(".bg-info.small-box > .inner > h3").should("have.text", "150");
    });
    it("2.Widget", () => {
        cy.get(".bg-success.small-box > .inner > h3").should("have.text", "53%");
    });
    it("3.Widget", () => {
        cy.get(".bg-warning.small-box > .inner > h3").should("have.text", "44");
    });
    it("4.Widget", () => {
        cy.get(".bg-danger.small-box > .inner > h3").should("have.text", "65");
    });
});