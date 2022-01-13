/// <reference types="cypress" />

var formElementValues={
    email:"",
    pass:"",
    carName:""
}

context("Random select", () => {
    it("Random secilen elemanın alınması",  () => {
        cy.visit("www.test.iyikisordun.com/pages/UI/ribbons.html")
        cy.get("#exampleInputEmail1").type("cypress@test.com")
        cy.get("#exampleInputPassword1").type("admin123")
        cy.get('.select-selected').click()

        cy.get("body > div > div.content-wrapper > center > div.custom-select > div.select-items >div").then((dropdownElement)=>{
            dropdownElement=dropdownElement.length
            cy.log(dropdownElement)
            let randomSelect=Math.floor(Math.random()*(dropdownElement))+1
            cy.log(randomSelect)

            cy.get(`body > div > div.content-wrapper > center > div.custom-select > div.select-items > div:nth-child(${randomSelect})`)
                .invoke("text")
                .then((carNameText)=>{
                    formElementValues.carName=carNameText
                    cy.log(carNameText)
                })

            cy.get(`body > div > div.content-wrapper > center > div.custom-select > div.select-items > div:nth-child(${randomSelect})`).click()

            cy.window().scrollTo("top")
            cy.get('.select-selected').invoke("text").then((carNameSelectText)=>{

            })
        })




    });
});