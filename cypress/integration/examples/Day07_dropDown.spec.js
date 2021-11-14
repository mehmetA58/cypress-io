/// <reference types="cypress" />
context("DropDown", () => {
    it("Select", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get(
                "body > div > div.content-wrapper > section.content > div > div > div:nth-child(2) > div > div.card-body > form > div:nth-child(2) > div:nth-child(1) > div > select"
            )
            .select("option 3")
            .should("have.value", "option 3");
    });
    it("Multi Select", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get(
                "body > div > div.content-wrapper > section.content > div > div > div:nth-child(2) > div > div.card-body > form > div:nth-child(3) > div:nth-child(1) > div > select"
            )
            .select(["option 1", "option 2", "option 3"])
            .invoke("val")
            .should("deep.equal", ["option 1", "option 2", "option 3"]);
    });
});