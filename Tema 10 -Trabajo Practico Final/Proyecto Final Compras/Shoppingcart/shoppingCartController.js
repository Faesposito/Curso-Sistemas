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

		let id = event.srcElement.id.slice(15);

		let cartProductData = {
			id : document.getElementById('product-id' + id).innerHTML ,
			name : document.getElementById('product-name' + id).innerHTML,
			category : document.getElementById('product-category' + id).innerHTML ,
			price : document.getElementById('product-price' + id).innerHTML,
			quantity : document.getElementById('product-quantity' + id).value,
			description : document.getElementById('product-description' + id).innerHTML
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