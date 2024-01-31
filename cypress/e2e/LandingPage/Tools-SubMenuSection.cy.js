///<reference types = "cypress"/>

const consentTerms = require("../../helper/consentTerms")
const drywallsanderpage = require("../../pages/DrywallSanderPage")

describe("These are the set of actions performed on the Tools sub-menu", ()=>{
    beforeEach(() =>{
        cy.visit('/')
        consentTerms.acceptAll();
        //click on the tools menu
        cy.get(".main-navigation__list")
					.find("a")
					.eq(0)
					.contains("Tools")
					.click();
    })

    it("click on Drywall sander submenu", () =>{
        cy.get(".normal-tile").each(($el) =>{
            const submenutext = $el.find(".tile__title").text();            
            if(submenutext.includes('Drywall')){
                cy.wrap($el).find('a').click();
            }
        });
        drywallsanderpage.getpagetitle().should("be.equal", 'Drywall sander');
    })
})