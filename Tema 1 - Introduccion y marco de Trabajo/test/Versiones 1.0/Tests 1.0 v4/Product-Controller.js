/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import {ProductModel} from './Product-Model.js';

class ProductController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onAddToCartButtonClick()
	{
		console.log(event.srcElement.id);
	}
	
	onCreate()
	{
		this.innerView.update();
	}
	
	onCloseModalButtonClick()
	{
		document.getElementById("Containner").style.display = "block";
		document.getElementById('newProductModal').style.display='none';
		document.getElementById('editProductModal').style.display='none';
		document.getElementById('deleteProductModal').style.display='none';
		//document.body.style.backgroundColor = "#1abc9c79";
	}

	/********************* Start of New Product Events ***************************/

	onNewProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('newProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onNewProductConfirmButtonClick()
	{
		let formViewData = new FormData( document.getElementById("newProductForm") );
		let formProductData = Object.fromEntries(formViewData);

		let success = true;

		if ( !this.innerModel.isValidProductData( formProductData ) )
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		if ( success )
		{
			this.innerModel.create( formProductData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		
		document.getElementById("Containner").style.display = "block";
		document.getElementById('newProductModal').style.display='none';
		document.body.style.backgroundColor = "white";

	}

	/********************* End of New Product Events *****************************/


	/********************* Start of Edit Product Events **************************/

	onEditProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('editProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onEditProductConfirmButtonClick()
	{
		let formViewData = new FormData( document.getElementById("editProductForm") );
		let formProductData = Object.fromEntries(formViewData);
		
		let success = true;

		if ( !this.innerModel.isValidProductData( formProductData ))
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		/* if ( !this.innerModel.isProductAlredyCreated(formNameToEdit))
		{
			window.alert("ClientError: El Producto no Existe.");
			success = false;
		} */

		console.log(success);

		if ( success )
		{
			let editedUserData = {
				name: formViewData.get('name'),
				category: formViewData.get('category'),
				price: formViewData.get('price'),
				quantity: formViewData.get('quantity')
			}

			this.innerModel.edit( editedUserData, formProductData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		
		document.getElementById("Containner").style.display = "block";
		document.getElementById('editProductModal').style.display='none';
		document.body.style.backgroundColor = "white";

	}

	/********************** End of Edit Product Events ***************************/


	/******************** Start of Delete Product Events *************************/
	onDeleteProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('deleteProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onDeleteProductConfirmButtonClick()
	{
		let formViewData = new FormData( document.getElementById("deleteProductForm") );
		let formProductData = formViewData.get('productToDeleteName');

		this.innerModel.delete(formProductData).then( response => this.innerView.update() );
		
		document.getElementById("Containner").style.display = "block";
		document.getElementById('deleteProductModal').style.display='none';
		document.body.style.backgroundColor = "white";

	}

	/********************* End of Delete Product Events **************************/
}

export { ProductController };
