/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class ShoppingCartModel extends EventTarget {


	constructor() {

		super();
		this.innerData = new Array();

	};

	create(userData) {
	
		this.innerData.push(userData);
		
		this.dispatchEvent(new CustomEvent("change"));
	}

	edit() {
		this.dispatchEvent(new CustomEvent("change"));
	};

	delete() {
		this.dispatchEvent(new CustomEvent("change"));
	};

};


export {
	ShoppingCartModel
};