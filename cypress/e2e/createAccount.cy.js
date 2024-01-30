import createAccountPage from "../pages/createAccountPage";
import consentTerms from "../helper/consentTerms";

describe("This are actions that relates to creating account", () => {
	
	beforeEach(()=> {
		cy.fixture('userinfo').then(function(data){
			 this.data = data
			//cy.log(this.obj)
		})
	})
	it("Create a new account", function() {
		cy.visit("https://login.festool.com/Registration/Register");
		
        cy.wait(4000)
		consentTerms.acceptAll();
		createAccountPage.createAMyFestoolAccount(this.data);
		createAccountPage.verifyTheCheckmark()
		createAccountPage.backToLogin();
	});

	it('pulls data from a fixture', () =>{
		cy.fixture('example').then((data)=>{
			cy.log(data)
		})
	})
});
