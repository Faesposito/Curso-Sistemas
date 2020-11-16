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
		this.stockAvailable = new Array();
	};

	addProductToCart(productData) {
		
		if (!this.isProductAlredyinCart(productData)) {
			this.innerData.push(productData);
		}	
		this.dispatchEvent(new CustomEvent("change"));
	}

	isProductAlredyinCart(productData) {

		if (this.innerData != null) {

			let index = this.innerData.findIndex(product => product.id === productData.id);

			if (index >= 0) {
				this.innerData[index].quantity = Number(this.innerData[index].quantity) + Number(productData.quantity) ;
				return true;
			}
			return false;
		} 				
	}

	edit(data) {

		let message =
		{
			action:'edit',
			body: data
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
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
		this.stockAvailable = [];
	}

	buyProductsInCart() {
		
		let data = {};

		for (let products of this.innerData) {
			
			let stockAvailable = this.getStock(products.id);
			data = {
				id : products.id,
				name : products.name,
				category : products.category ,
				price : products.price,
				quantity :  Number(stockAvailable) - Number(products.quantity),
				description : products.description,
			}	
			this.edit(data);
		}

		this.cleanCart();
		this.dispatchEvent(new CustomEvent("change"));
	}; 

	
	getAll() {

		return this.innerData;
	}

	getStock(productId) {
	
		let index = this.innerData.findIndex(product => product.id === productId);

		return this.stockAvailable[index].stockAvailable;
	}
};


export { ShoppingCartModel };