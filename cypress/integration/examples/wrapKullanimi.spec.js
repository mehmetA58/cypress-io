/// <reference types="cypress" />

context("Then yapisi", () => {
    it("wrap kullanimi",  () => {
        cy.visit("www.test.iyikisordun.com/pages/forms/general.html#")
        cy.get('input#exampleInputEmail1').invoke("val").then((emailAdress)=>{
            let mail=emailAdress
            cy.log(emailAdress)
            cy.wrap(emailAdress).as("emailAdress")
        })
       cy.get("@emailAdress").then((emailAdress)=>{
           cy.log(emailAdress)
       })
        cy.visit("www.test.iyikisordun.com/pages/forms/validation.html")
        cy.get("@emailAdress").then((emailAdress)=>{
            cy.get("#exampleInputEmail1").type(emailAdress)
        })



    });
});