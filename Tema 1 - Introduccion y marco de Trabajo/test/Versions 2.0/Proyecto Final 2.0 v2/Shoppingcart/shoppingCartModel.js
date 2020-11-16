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

	addProductToCart(productData) {
	
		this.innerData.push(productData);
		this.dispatchEvent(new CustomEvent("change"));
	}

	edit(data) {

		this.dispatchEvent(new CustomEvent("change"));

		let message =
		{
			action:'edit',
			body: data
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	deleteProductFromCart(productDataName) {

		let index = this.innerData.findIndex(product => product.name === productDataName);

		if (index >= 0) {
			this.innerData.splice(index, 1);
			this.dispatchEvent(new CustomEvent("change"));
		}
	};

	cleanCart() {

		this.innerData = [];
	}

	buyProductsInCart() {
		
		let data = {};

		for (const products of this.innerData) {
			data = {
				id : products.id,
				name : products.name,
				category : products.category ,
				price : products.price,
				quantity : products.quantity,
				description : products.description,
			}	
			this.edit(data);
		}

		this.dispatchEvent(new CustomEvent("change"));
	}; 

	
	getAll() {

		return this.innerData;
	}
};


export { ShoppingCartModel };