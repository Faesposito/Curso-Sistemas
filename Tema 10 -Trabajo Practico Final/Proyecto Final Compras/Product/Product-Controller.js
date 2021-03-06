/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class ProductController {

	constructor( model, view ) {

		this.innerView = view;
		this.innerModel = model;
	}

	upload(imageData){

		let xmlRequest = new XMLHttpRequest();
		xmlRequest.open("POST", "./Product/upload.php", true);
		xmlRequest.send(imageData);
	}

	oncloseProductModalButtonClick() {

		this.innerView.closeProductModal();
	}

	/********************* Start of New Product Events ***************************/

	onNewProductButtonClick() {

		this.innerView.openProductModal('newProductModal');
	}

	onNewProductConfirmButtonClick() {

		this.innerModel.getAll().then( response => this.newProduct(response.json()) );
	}

	newProduct(dataResponse) {

		dataResponse.then( productArray => {

			let formViewData = new FormData( document.getElementById("newProductForm") );
			let formProductData = Object.fromEntries(formViewData);

			this.upload(new FormData( document.getElementById("newProductImageForm")));

			let success = true;

			if ( !this.innerModel.isValidProductData( formProductData )) {

				window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
				success = false;
			}

			if ( success ) {

				for( let product of productArray ) {

					if(formProductData.name === product.name) {
						window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
						success = false;
					}	
				}	
			}

			if ( success ) {

				this.innerModel.create( formProductData ) // Ejecuta el metodo Create del RemoteModel y devuelve una Promesa de la respuesta del Server
				.then( response => response.json() ) // decodifica la respuesta del Json y lo convierte en un Objeto de Javascript
				.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )/*
				chequea que la respuesta no tengo null o la propiedad status que es agregada en caso de error
				*/
				.then( () => this.innerView.update() );
			}		
		});

		
		this.innerView.closeProductModal();
		
	}

	/********************* End of New Product Events *****************************/

	/********************* Start of Edit Product Events **************************/

	onEditProductButtonClick() {

		this.innerView.openProductModal('editProductModal');
	}

	onEditProductConfirmButtonClick() {

		this.innerModel.getAll().then( response => this.editProduct(response.json()) );
	}

	editProduct( dataResponse ) {

		dataResponse.then( productArray => {

		let formViewData = new FormData( document.getElementById("editProductForm") );
		
		this.upload(new FormData( document.getElementById("editProductImageForm")));

		let productEditedData = {
				id : 0,
				name: formViewData.get('name'),
				category: formViewData.get('category'),
				price: formViewData.get('price'),
				quantity: formViewData.get('quantity'),
				description : formViewData.get('description')
		}
		
		let productNameToEdit = formViewData.get('productToEditName');
		
		let success = true;

		if ( !this.innerModel.isValidProductData( productEditedData ))
		{
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		if ( success ) {

			for( let product of productArray ) {

				if(productNameToEdit === product.name) {
					productEditedData.id = product.id;
				}	
			}
			if ( productEditedData.id === 0) {

				window.alert("ClientError: El Producto no Existe.");
				success = false;
			}	
		}
		
		if ( success ) {

			this.innerModel.edit( productEditedData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		 
		this.innerView.closeProductModal();
		
		});
	}
	/********************** End of Edit Product Events ***************************/

	/******************** Start of Delete Product Events *************************/
	onDeleteProductButtonClick() {

		this.innerView.openProductModal('deleteProductModal');
	}

	onDeleteProductConfirmButtonClick() {

		let formViewData = new FormData( document.getElementById("deleteProductForm") );
		let formProductData = formViewData.get('productToDeleteName');

		this.innerModel.delete(formProductData).then( response => this.innerView.update() );
		
		this.innerView.closeProductModal();
	}

	/********************* End of Delete Product Events **************************/
	onDeleteFromCartClick() {

		this.innerView.update()
	}
}

export { ProductController };
