///  <reference types="cypress" />
const urls={
"General":"http://test.iyikisordun.com/pages/UI/general.html",
"Icons":"http://test.iyikisordun.com/pages/UI/icons.html",
"Buttons":"http://test.iyikisordun.com/pages/UI/buttons.html",
"Sliders":"http://test.iyikisordun.com/pages/UI/sliders.html",
"Modal & Alerts":"http://test.iyikisordun.com/pages/UI/modals.html",
"Navbar & Tabs":"http://test.iyikisordun.com/pages/UI/navbar.html",
"Timeline":"http://test.iyikisordun.com/pages/UI/timeline.html",
"Ribbons":"http://test.iyikisordun.com/pages/UI/ribbons.html"
}

context("Each Kullanımı", () => {
    const emailInputXPath = "//input[@type='email' and @name='username'] ";
    const passwordInputXPath = "//input[@name='password']";
    const submitButtonXPath = "//input[@type='submit']";
    it("Href Dogrulama",  () => {

        //visit

        const baseUrl="http://test.iyikisordun.com/"
        let buttonName,url
        cy.visit(baseUrl)

        //login



        cy.xpath(emailInputXPath).type("cypress_test_1@gmail.com");
        cy.xpath(passwordInputXPath).type("admin_123");
        cy.xpath(submitButtonXPath).click();

        //each
        cy.get(':nth-child(5) > [href="#"] > .nav-icon').click()
        cy.get("li:nth-of-type(5) > .nav.nav-treeview a").each((element, index, $list) => {
           // cy.log("ElementName: "+element.text(),", index: "+index, ",eleman sayisi:"+$list.length)
            cy.wrap(element).should("have.attr","href").then((href)=>{
                //cy.log(href)
                buttonName=element.children('p').text().trim()
                url=urls[buttonName]
                assert.equal(url,(baseUrl+href),"Href dogrulaması")
            })

        })

    });
});