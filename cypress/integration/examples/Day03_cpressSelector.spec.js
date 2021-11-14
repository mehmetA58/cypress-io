///<reference types="cypress" />
context("Cypress Selector", () => {
    const eMail = "cypress_test_1@gmail.com";
    const password = "admin_123";
    it("Path kullanımı", () => {
        cy.visit(Cypress.config("baseUrl"));
        cy.get("[type = 'email']").type(eMail);
        cy.get("[type = 'password']").type(password);
        cy.wait(2000);
        cy.get(".btn").click();
        //cy.get("#fail").should("include.text", "Girdiğiniz bilgiler hatalıdır.");
        cy.get(".m-0").should("have.text", "Dashboard");
        cy.url().should("include", "index.php");
    });
});