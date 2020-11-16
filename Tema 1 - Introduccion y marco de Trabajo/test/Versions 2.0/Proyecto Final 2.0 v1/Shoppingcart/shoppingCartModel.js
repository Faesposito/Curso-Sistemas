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

	addProductToCart(userData) {
	
		this.innerData.push(userData);
		this.dispatchEvent(new CustomEvent("change"));
	}

	edit() {
		this.dispatchEvent(new CustomEvent("change"));
	};

	deleteProductFromCart(productDataName) {

		let index = this.innerData.findIndex(product => product.name === productDataName);

		if (index >= 0) {
			this.innerData.splice(index, 1);
			this.dispatchEvent(new CustomEvent("change"));
		}
	};

	buyProductsInCart() {
		
		let data = [];

		for (const products of this.innerData) {
			data = {
				name : products.name,
				category : products.category ,
				price : Number(products.price) * Number(products.quantity),
				quantity : products.quantity,
				description : products.description,
			}	
		}

		this.dispatchEvent(new CustomEvent("change"));
	}; 

	
	getAll() {

		return this.innerData;

	}
};


export {
	ShoppingCartModel
};