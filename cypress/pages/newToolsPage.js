class newToolsPage {
	newtoolspageelements = {
		titlepage: () => cy.get(".medium-8").find('h1'),
	};

    getTitle(){
        this.newtoolspageelements.titlepage().contains('New Tools');
    }
}

module.exports = new newToolsPage();
