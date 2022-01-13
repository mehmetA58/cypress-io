/// <reference types="cypress" />


Given("url adresine gider", function () {
cy.get("www.amazon.com")
});

Then("amazon arama kutusunda java arar", function () {
    cy.get("#twotabsearchtextbox").type("cypress")
    cy.get('#nav-search-submit-button').click()
});
Then("sonucun java icerdigini dogrular", function () {
    cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section').should("include.text","java")
});
