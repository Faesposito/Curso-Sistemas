/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class ShoppingCartController {

	constructor(model, view ) {

		this.innerView = view;
		this.innerModel = model;
	}

	onAddToCartButtonClick() {

		let productIndex = event.srcElement.id.slice(15);

		let productQuantityHandler = document.getElementById('product-quantity' + productIndex);
		
		if(Number(productQuantityHandler.value) > Number(productQuantityHandler.max) ) {

			alert('No se puede Agregar la cantidad de productos solicitada por falta de stock.');
			alert(`Se agrego la cantidad disponible que era de ${productQuantityHandler.max}`);

			productQuantityHandler.value = productQuantityHandler.max;
			
			productQuantityHandler.max -= productQuantityHandler.max

			document.getElementById('AddToCartButton' + productIndex).setAttribute('disabled',true);
			document.getElementById('AddToCartButton' + productIndex).innerHTML = 'Out of Stock';
		}
		else productQuantityHandler.max -= productQuantityHandler.value;
		
		let cartProductData = {
			id : document.getElementById('product-id' + productIndex).innerHTML ,
			name : document.getElementById('product-name' + productIndex).innerHTML,
			category : document.getElementById('product-category' + productIndex).innerHTML ,
			price : document.getElementById('product-price' + productIndex).innerHTML,
			quantity : productQuantityHandler.value,
			description : document.getElementById('product-description' + productIndex).innerHTML
		}

		this.innerModel.addProductToCart(cartProductData);
		this.innerView.showCart();		
	}

	onDeleteFromCartButtonClick()
	{
		let id = event.srcElement.id.slice(21);
		let productToDeleteName = document.getElementById('productInCartName' + id).innerHTML;
		this.innerModel.deleteProductFromCart(productToDeleteName);
		this.innerView.showCart();
	}

	onBuyProductButtonClick() {

		this.innerModel.buyProductsInCart();			
		this.innerView.dispatchEvent( new CustomEvent('buyProductsClick') );	
	}
}

export { ShoppingCartController };