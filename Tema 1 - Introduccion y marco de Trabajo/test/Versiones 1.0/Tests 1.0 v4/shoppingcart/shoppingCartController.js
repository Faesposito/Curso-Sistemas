/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/


class ShoppingCartController {

	constructor(model, view) {

		this.innerView = view;
		this.innerModel = model;


		this.innerModel.addEventListener('change', event => this.innerView.update());
		this.innerView.update();
	}

	addProduct()
	{
		console.log("producto added");
	}

	onAddToCartButtonClick()
	{
		this.addProduct();
	}
}

export {
	ShoppingCartController
};