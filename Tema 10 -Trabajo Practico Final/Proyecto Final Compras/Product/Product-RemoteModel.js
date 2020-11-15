/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class ProductRemoteModel extends EventTarget {

	constructor() {

		super();
	}

	create( productData ) {

		let message = {

			action:'create',
			body: productData
		};
		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	}

	edit( productEditedData ) {

		let message =
		{
			action:'edit',
			body: productEditedData
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	delete( productDataName ) {

		let message = {

			action:'delete',
			body: { name:productDataName }
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getAll() {

		let message = {

			action:'getAll',
			body: null
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	isValidProductData( productData ) {

		let success = true;

		success = ( success && productData.hasOwnProperty('name') && productData.name != null && productData.name != '');
		success = ( success && productData.hasOwnProperty('category') && productData.category != null && productData.category != '' );
		success = ( success && productData.hasOwnProperty('price') && productData.price != null && productData.price > 0);
		success = ( success && productData.hasOwnProperty('quantity') && productData.quantity != null && productData.quantity >= 0);
		success = ( success && productData.hasOwnProperty('description') && productData.description != null && productData.description != '' );

		return success;
	};

	getByProductId( productId ) {

		let message = {

			action:'getByProductId',
			body: productId
		};

		return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	}; 
	/* 

	isProductAlredyCreated( productDataName ) {

		let message = {

			action:'isProductAlredyCreated',
			body: { name: productDataName }
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	 */

}

export { ProductRemoteModel };
