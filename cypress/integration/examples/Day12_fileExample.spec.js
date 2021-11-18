context("Files", () => {
    it("ReadFile", () => {
        cy.readFile("cypress/fixtures/CypressTest.txt").should("eq", "Hello");
        cy.readFile("cypress/fixtures/CypressTest1.json")
            .its("email")
            .should("eq", "cypress@test.com");
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.readFile("cypress/fixtures/CypressTest1.json")
            .its("email")
            .then((emailAddress) => {
                cy.get("input#exampleInputEmail1").clear().type(emailAddress);
            });
    });
    it("writeFile", () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html");
        cy.get("input#exampleInputEmail1")
            .invoke("val")
            .then((emailAddress) => {
                cy.writeFile("cypress/fixtures/writeFile.json", {
                    email: emailAddress,
                });
            });
    });
    it("writeFile txt", () => {
        cy.visit("https://test.iyikisordun.com/pages/UI/navbar.html");
        cy.get("div#custom-content-above-home")
            .invoke("text")
            .then((text) => {
                text = text.trim();
                cy.writeFile("cypress/fixtures/ornekText.txt", text);
            });
    });
});