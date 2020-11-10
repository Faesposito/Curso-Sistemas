/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class ShoppingCartRemoteModel extends EventTarget {

	constructor() {
		super();
	}

	addProductToCart( productData ) {

		let message =
		{
			action:'addProductToCart',
			body: productData
		};
		return fetch( './shoppingcart/Product.php', { method:'POST', body:JSON.stringify(message) } );
	}

	edit( newUserData ) {

		let message =
		{
			action:'edit',
			body: newUserData
		};
		return fetch( './shoppingcart/Product.php', { method:'POST', body:JSON.stringify(message) } );
	};

	deleteProductFromCart( productDataName ) {

		let message =
		{
			action:'deleteProductFromCart',
			body: { name:productDataName }
		};

		return fetch( './shoppingcart/Product.php', { method:'POST', body:JSON.stringify(message) } );
	};

	buyProductsInCart(productDataName) {

		let message =
		{
			action:'buyProductsInCart',
			body: { productDataName }
		};

		return fetch( './Product.php', { method:'POST', body:JSON.stringify(message) } );
	}

	getAll() {

		let message =
		{
			action:'getAll',
			body: null
		};

		return fetch( './shoppingcart/Product.php', { method:'POST', body:JSON.stringify(message) } );
	};

}

export { ShoppingCartRemoteModel };