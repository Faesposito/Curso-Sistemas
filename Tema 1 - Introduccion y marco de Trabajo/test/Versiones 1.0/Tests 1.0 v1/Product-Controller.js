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

	onNewProductConfirmButtonClick()
	{
		//Traer los datos del form de la vista.
		let formViewData = new FormData( document.getElementById("newProductForm") );
		let formProductData = Object.fromEntries(formViewData);

		//Validaciones tempranas (Cliente)
		let success = true;

		if ( !this.innerModel.isValidProductData( formProductData ) )
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		//Superadas todas las validaciones tempranas del cliente, invocar el modelo (despacho)
		if ( success )
		{
			//Modelo es asincrónico, al final de la cadena se chequea si hubo errores.
			this.innerModel.create( formProductData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		

		//Ocultar el modal
		document.getElementById("Containner").style.display = "block";
		document.getElementById('newProductModal').style.display='none';
		document.body.style.backgroundColor = "#1abc9c79";
		//this.innerView.hideNewUserModal();
	}

	onCloseModalButtonClick()
	{
		document.getElementById("Containner").style.display = "block";
		document.getElementById('newProductModal').style.display='none';
		document.getElementById('editProductModal').style.display='none';
		document.getElementById('deleteProductModal').style.display='none';
		document.body.style.backgroundColor = "#1abc9c79";
	}

	onNewProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('newProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onEditProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('editProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onDeleteProductButtonClick()
	{
		document.getElementById("Containner").style.display = "none";
		document.getElementById('deleteProductModal').style.display='block';
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
	}

	onDeleteByProductnameButtonClick()
	{
		let id = window.prompt('Indique el ID del usuario a borrar');
		this.innerModel.delete(id).then( response => this.innerView.update() );
	}

}

export { ProductController };
