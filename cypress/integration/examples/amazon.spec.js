/// <reference types="cypress" />
context("ilk testimiz", () => {
    it("Visit", () => {
        cy.visit("www.amazon.com");
        cy.url().should("include","amazon")
        cy.get("#twotabsearchtextbox").type("cypress")
        cy.get('#nav-search-submit-button').click()
        cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section').should("include.text","cypress")
        cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').each((element => {

            cy.log("ürünler : "+element.text(),"ürün sayisi :"+element.length)
        }))


    });
});