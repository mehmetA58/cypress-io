/// <reference types="cypress" />
context("Ozel klavye kontrolleri ve Check Box", () => {
    it("Ozel klavye kontrolleri", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html");
        cy.get(
            "body > div.wrapper > div.content-wrapper > section.content > div > div:nth-child(1) > div.card-body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span.selection > span > span.select2-selection__arrow > b"
        ).click;
    });
});