/// <reference types="cypress" />
context("File Actions", () => {
    it("Test", () => {
        cy.task('GetAllFileNames','cypress/integration/examples/').then((files) => {
    files.forEach(file =>{
        cy.log(file)
    });
    assert.equal(files.length,25)
        })
    })
})