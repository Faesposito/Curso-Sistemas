/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class ProductRemoteModel extends EventTarget
{
	constructor()
	{
		super();
	}

	create( productData )
	{
		let message =
		{
			action:'create',
			body: productData
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	}

	edit( newUserData )
	{
		let message =
		{
			action:'edit',
			body: newUserData
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	delete( productDataName )
	{
		let message =
		{
			action:'delete',
			body: { name:productDataName }
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getByProductName( productDataName )
	{
		let message =
		{
			action:'getByProductName',
			body: productDataName
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getAll()
	{
		let message =
		{
			action:'getAll',
			body: null
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	isProductAlredyCreated( productDataName )
	{
		let message =
		{
			action:'isProductAlredyCreated',
			body: { name:productDataName }
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	isValidProductData( productData )
	{
		let success = true;

		success = ( success && productData.hasOwnProperty('name') && productData.name != null );
		success = ( success && productData.hasOwnProperty('category') && productData.category != null );
		success = ( success && productData.hasOwnProperty('price') && productData.price != null && productData.price > 0);
		success = ( success && productData.hasOwnProperty('quantity') && productData.quantity != null);
		
		console.log(productData);
		console.log(success);

		return success;
	};
}

export { ProductRemoteModel };
