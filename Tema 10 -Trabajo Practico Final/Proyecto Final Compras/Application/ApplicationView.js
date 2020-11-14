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

		this.isAdmin = false;
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

	buyButtonRefresh() {
		
		this.sidebar();
		this.body();
	}

	normal() {

		this.isAdmin = false;

		this.clear();
		this.navbar();
		this.sidebar();
		this.body();	
		this.footer();
	}

	admin() {

		this.isAdmin = true;

		this.clear();
		this.navbar();
		this.sidebar();
		this.body();	
		this.footer();
	}

	login() {

		this.clear();
		
		let loginModel = new LoginModel();
		let loginView = new LoginView('login',loginModel);
		loginView.show();
		loginView.addEventListener('login', event => this.innerController.onLogin(event) );
		loginView.addEventListener('adminLogin', event => this.innerController.onAdminLogin(event) );
	}

	product() {

		let productModel = new ProductRemoteModel();
		let productView = new ProductView('body', productModel, this.isAdmin);
		
	}

	shoppingCart() {
		
		let shoppingCartModel = new ShoppingCartModel();
		let shoppingCartView = new ShoppingCartView('sidebar', shoppingCartModel);
		this.shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);

		shoppingCartView.addEventListener('buyProductsClick', event => this.innerController.buyProductsClick(event) );
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
		this.admin();

		document.getElementById(this.id).addEventListener('click', event =>
			{
				if (event.target.classList.contains("addToCart")) this.shoppingCartController.onAddToCartButtonClick(event); 
			});
	}
	
}

export { ApplicationView };
