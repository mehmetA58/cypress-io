/// <reference types="cypress" />
context("Tarayıcı fonksiyonlari", () => {
    const url1 = "http://test.iyikisordun.com/index2.html";
    const url2 = "http://test.iyikisordun.com/index3.html";
    it("Geri gelme", () => {
        cy.visit(url1);
        cy.wait(2000);
        cy.visit(url2);

        cy.go("back"); //cy.go(-1)
        cy.url().should("include", "index2");
    });
    it("ileri Gitme", () => {
        cy.wait(2000);
        cy.go(1); //cy.go("forward")
        cy.url().should("include", "index3");
    });
    it("Reload", () => {
        cy.pause();
        cy.reload();
    });
});