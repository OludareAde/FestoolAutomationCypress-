class DrywallSander {
	drywallsanderpageelements = {
		pagetitle: () => cy.get(".medium-8").find('h1'),
	};


    getpagetitle(){
        return this.drywallsanderpageelements.pagetitle().invoke('text');
    }
}

module.exports = new DrywallSander();