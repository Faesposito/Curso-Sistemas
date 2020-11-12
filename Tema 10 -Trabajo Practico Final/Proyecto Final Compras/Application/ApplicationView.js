/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import { ApplicationController } from "./ApplicationController.js"

import { LoginView } from "../login/LoginView.js"
import { LoginModel } from "../login/LoginModel.js"

import { ProductView } from "../Product/Product-View.js"
import { ProductRemoteModel } from "../Product/Product-RemoteModel.js"

import { ShoppingCartView } from "../Shoppingcart/shoppingCartView.js"
import { ShoppingCartModel } from "../Shoppingcart/shoppingCartModel.js"
import { ShoppingCartController } from "../Shoppingcart/shoppingCartController.js"

class ApplicationView {

	constructor( id, model ) {

		this.id = id;
		this.innerModel = model;

		this.innerController = new ApplicationController(model, this);
		
		this.shoppingCartController = '';
		
		//this.navbarButtonArray = new Array();

		this.show();		
	}

	clear() {

		document.getElementById('login').innerHTML = '';
		document.getElementById("navbar").innerHTML = '';
		document.getElementById("sidebar").innerHTML = '';
		document.getElementById("body").innerHTML = '';
		document.getElementById("footer").innerHTML = '';
	}

	normal() {

		this.clear();
		//this.navbar();
		this.sidebar();
		this.body();	
		//this.footer();
	}

	login() {

		this.clear();
		
		let loginModel = new LoginModel();
		let loginView = new LoginView('login',loginModel);
		loginView.show();
		loginView.addEventListener('login', event => this.innerController.onlogin() );
	}

	product() {

		let productModel = new ProductRemoteModel();
		let productView = new ProductView('body', productModel);

		productView.update();
	}

	shoppingCart() {
		
		let shoppingCartModel = new ShoppingCartModel();
		let shoppingCartView = new ShoppingCartView('sidebar', shoppingCartModel);

		this.shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);

		shoppingCartView.showCart();

	}

	navbar() {

	}

	sidebar() {

		this.shoppingCart();
	}

	body() {

		this.product();
	}

	footer() {

	}

	show() {
		
		//this.login();
		this.normal();

		document.getElementById(this.id).addEventListener('click', event =>
			{
				if (event.target.classList.contains("addToCart")) this.shoppingCartController.onAddToCartButtonClick(event);
				// solucion momentanea... 
				if (event.target.classList.contains("buyButton")) this.normal();
			});
	}
	
}

export { ApplicationView };
