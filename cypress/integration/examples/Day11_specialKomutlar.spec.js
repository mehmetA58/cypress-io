/// <reference types="cypress" />
context("Scroll islemleri", () => {
    it.skip("scrollTo", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html");
        cy.wait(2000);
        cy.window().scrollTo("bottom");
        cy.wait(2000);
        cy.window().scrollTo("center");
        cy.wait(2000);
        cy.window().scrollTo(0, 200);
    });
    it.skip("DateTableScrollTo", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html");
        cy.wait(2000);
        cy.window().scrollTo("bottom");
        cy.wait(3000);
        cy.get(
            "div:nth-of-type(3) > .col-12  .card-body.p-0.table-responsive"
        ).scrollTo("bottom");
    });
    it("DateTableScrollTo", () => {
        cy.visit("https://test.iyikisordun.com/pages/tables/simple.html");
        cy.wait(2000);
        cy.get(
            "div:nth-of-type(3) > .col-12  .card-body.p-0.table-responsive"
        ).scrollIntoView();
    });
});