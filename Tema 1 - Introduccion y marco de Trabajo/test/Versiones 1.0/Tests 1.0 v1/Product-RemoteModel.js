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

	create( userData )
	{
		let message =
		{
			action:'create',
			body: userData
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

	delete( id )
	{
		let message =
		{
			action:'delete',
			body: { username:id }
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	getByProductName( username )
	{
		let message =
		{
			action:'getByProductName',
			body: username
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

	isProductAlredyCreated( id )
	{
		let message =
		{
			action:'isProductAlredyCreated',
			body: { username:id }
		};

		return fetch( './Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
	};

	isValidProductData( productData )
	{
		let success = true;

		success = ( success && productData.hasOwnProperty('name') && productData.name != null );
		success = ( success && productData.hasOwnProperty('type') && productData.type != null );
		success = ( success && productData.hasOwnProperty('price') && productData.price != null && productData.price > 0);
		success = ( success && productData.hasOwnProperty('quantity') && productData.quantity != null);
		
		console.log(productData);
		console.log(success);

		return success;
	};
}

export { ProductRemoteModel };
