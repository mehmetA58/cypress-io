///<reference types="Cypress"/>
context("Alert", () => {
    it("Alert üzerindeki texti doğrulama", () => {
        cy.visit("https://test.iyikisordun.com/pages/UI/modals.html");
        cy.get(
            ".card.card-outline.card-primary > .card-body > button:nth-of-type(1)"
        ).click();

        cy.on("window:alert", (str) => {
            expect(str).to.equal("Cypress alert kontrol.");
        });
    });
});