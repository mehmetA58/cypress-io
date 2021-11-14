/// <reference types="cypress" />
context("Ozel klavye kontrolleri ve Check Box", () => {
    it("Ozel klavye kontrolleri", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html");
        cy.get(
            "body > div.wrapper > div.content-wrapper > section.content > div > div:nth-child(1) > div.card-body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span > span.selection > span > span.select2-selection__arrow"
        ).click();
        cy.wait(2000);
        cy.get(
                "body > span > span > span.select2-search.select2-search--dropdown > input"
            )
            .type("Texas")
            .type("{enter}");
    });
    it("CheckBox", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html");
        cy.wait(2000);
        cy.get("[type='checkbox']")
            .check(["pr2", "dg2"], { force: true })
            .should("be.checked");
        cy.wait(2000);
        cy.get("[type='checkbox']")
            .uncheck(["pr2", "dg2"], { force: true })
            .should("not.be.checked");
    });
    it("UNCheckBox", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html");
        cy.wait(2000);
        cy.get("[type='checkbox']")
            .uncheck(["pr2", "dg2"], { force: true })
            .should("not.be.checked");
    });
});