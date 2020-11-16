/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class ProductModel extends EventTarget
{
	constructor()
	{
		super();
		this.innerData = new Array();
	};

	create( productData )
	{
		let success = false;

		if ( this.isValidProductData(productData) && this.isProductAlredyCreated(productData.name))
		{
			this.innerData.push( productData );
			this.dispatchEvent( new CustomEvent("change") );
		}
	}

	edit( name, newProductData )
	{
		let success = false;

		let index = this.innerData.findIndex( user => user.name === name );

		if ( index >= 0 && this.isValidProductData(newProductData))
		{
			Object.assign(this.innerData[index], newProductData);
			this.dispatchEvent( new CustomEvent("change") );
		}
	};

	delete( name )
	{
		let index = this.innerData.findIndex( user => user.name === name );

		if ( index >= 0 )
		{
			this.innerData.splice(index,1);
			this.dispatchEvent( new CustomEvent("change") );
		}
	};

	getByProductName( name )
	{
		if ( typeof(name) === "string" )
		{
			let index = this.innerData.findIndex( user => user.name === name );

			return ( index >= 0 )? this.innerData[index] : null;
		}
		else
		{
			return null;
		}
	};

	getAll()
	{
		return this.innerData;
	};

	isProductAlredyCreated( name )
	{
		return ( this.getByProductName( name ) == null )? false : true;
	};

	isValidProductData( productData )
	{
		let success = true;

		success = ( success && productData.hasOwnProperty('name') && productData.name != null );
		success = ( success && productData.hasOwnProperty('type') && productData.type != null );
		success = ( success && productData.hasOwnProperty('price') && productData.price != null && productData.price >= 0);
		success = ( success && productData.hasOwnProperty('quantity') && productData.quantity != null && productData.quantity >= 0);

		return success;
	};

};


export { ProductModel };