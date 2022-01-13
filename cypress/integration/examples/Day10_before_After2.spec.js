/// <reference types="cypress" />

context("Before-After", () => {
    it("2.1.Widget", () => {
        cy.get(":nth-child(1) > .small-box > .inner > p").should(
            "have.text",
            "New Orders"
        );
    });
    it("2.2.Widget", () => {
        cy.get(":nth-child(2) > .small-box > .inner > p").should(
            "have.text",
            "Bounce Rate"
        );
    });
    it("2.3.Widget", () => {
        cy.get(":nth-child(3) > .small-box > .inner > p").should(
            "have.text",
            "User Registrations"
        );
    });
    it("2.4.Widget", () => {
        cy.get(":nth-child(4) > .small-box > .inner > p").should(
            "have.text",
            "Unique Visitors"
        );
    });
});