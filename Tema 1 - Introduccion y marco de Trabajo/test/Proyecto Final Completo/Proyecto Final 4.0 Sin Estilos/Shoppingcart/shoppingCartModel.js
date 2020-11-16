/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/
import { PurchaseOrder } from "../PurchaseOrder/PurchaseOrder.js"


class ShoppingCartModel {


	constructor() {

		this.innerData = new Array();
		this.purchaseOrder = new PurchaseOrder();
		
	};

	addProductToCart(productData) {
		
		if (!this.isProductAlredyinCart(productData)) {

			this.innerData.push(productData);	
		}	
	}

	isProductAlredyinCart(productData) {

		if (this.innerData != null) {

			let index = this.innerData.findIndex(product => product.id === productData.id);

			if (index >= 0) {
				this.innerData[index].quantity = Number(this.innerData[index].quantity) + Number(productData.quantity);
				return true;
			}
			return false;
		} 				
	}

	editStock(data) {

		let message =
		{
			action:'editStock',
			body: data
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	deleteProductFromCart(productDataName) {

		let index = this.innerData.findIndex(product => product.name === productDataName);

		if (index >= 0) {
			this.innerData.splice(index, 1);
		}
	};

	cleanCart() {

		this.innerData = [];
		this.stockAvailable = [];

	}

	buyProductsInCart() {
		
		let data = {};

		this.purchaseOrder.generatePurchaseOrder(this.innerData);

		for (let products of this.innerData) {
			
			data = {
				id : products.id,
				name : products.name,
				category : products.category ,
				price : products.price,
				quantity : products.quantity,
				description : products.description
			}	
			this.editStock(data);
		}
		this.cleanCart();
	}; 

	
	getAll() {

		return this.innerData;
	}

};


export { ShoppingCartModel };