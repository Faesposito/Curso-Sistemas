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
	
	oncloseProductModalButtonClick() {

		this.innerView.closeProductModal();
	}

	/********************* Start of New Product Events ***************************/

	onNewProductButtonClick() {

		let openModal = 'newProductModal';
		this.innerView.openProductModal(openModal);
	}

	onNewProductConfirmButtonClick() {

	
		let formViewData = new FormData( document.getElementById("newProductForm") );
		let formProductData = Object.fromEntries(formViewData);

		let success = true;

		if ( !this.innerModel.isValidProductData( formProductData ) ) {

			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		if ( success ) {

			this.innerModel.create( formProductData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		
		this.innerView.closeProductModal();
		
	}

	/********************* End of New Product Events *****************************/


	/********************* Start of Edit Product Events **************************/

	onEditProductButtonClick() {

		let openModal = 'editProductModal';
		this.innerView.openProductModal(openModal);
	}

	onEditProductConfirmButtonClick() {

		let formViewData = new FormData( document.getElementById("editProductForm") );
		let formProductData = Object.fromEntries(formViewData);
		let formProductNameToEdit =  formViewData.get('productToEditName');
		let success = true;

		if ( !this.innerModel.isValidProductData( formProductData )) {
			
			window.alert("ClientError: Los datos del usuario no cumplen con la especificación requerida.");
			success = false;
		}

		console.log(success);
		if ( success ) {

			let editedUserData = {

				name: formViewData.get('name'),
				category: formViewData.get('category'),
				price: formViewData.get('price'),
				quantity: formViewData.get('quantity'),
				description: formViewData.get('description')
			}

			this.innerModel.edit( formProductNameToEdit, editedUserData )
			.then( response => response.json() )
			.then( response => {if ( response != null && response.hasOwnProperty('status') ) window.alert("ServerError: " + response.description )} )
			.then( () => this.innerView.update() );
		}
		
		this.innerView.closeProductModal();

	}

	/********************** End of Edit Product Events ***************************/


	/******************** Start of Delete Product Events *************************/
	onDeleteProductButtonClick() {

		let openModal = 'deleteProductModal';
		this.innerView.openProductModal(openModal);
	}

	onDeleteProductConfirmButtonClick() {

		let formViewData = new FormData( document.getElementById("deleteProductForm") );
		let formProductData = formViewData.get('productToDeleteName');

		this.innerModel.delete(formProductData).then( response => this.innerView.update() );
		
		this.innerView.closeProductModal();

	}

	/********************* End of Delete Product Events **************************/
}

export { ProductController };
