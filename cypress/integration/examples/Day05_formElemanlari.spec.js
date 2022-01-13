/// <reference types="cypress" />
context("Form Elemanlari", () => {
    it("input box", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.pause();
        cy.get("input#exampleInputEmail1").clear();
    });
    it("input box Editleme", () => {
        cy.reload();
        cy.pause();
        cy.get("input#exampleInputEmail1").type("istedigim deger");
    });
    it("input box Editleme", () => {
        cy.reload();
        cy.pause();
        cy.get("input#exampleInputEmail1").should(
            "have.value",
            "ornek_email@test.com"
        );
    });
    it("Radio Button", () => {
        cy.get("[type='radio']").check("radio_11", { force: true });
    });
});