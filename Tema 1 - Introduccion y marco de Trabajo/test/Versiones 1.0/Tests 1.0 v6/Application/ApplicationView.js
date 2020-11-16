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
		this.navbarButtonArray = new Array();

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
		loginView.addEventListener('login', event => this.innerController.onlogin() );
	}

	product() {

		//this.clear();
		let productModel = new ProductRemoteModel();
		let productView = new ProductView('body', productModel);
		productView.update();
		//productView.addEventListener('login', event => this.innerController.onlogin() );
	}

	shoppingCart() {

		//this.clear();
		
		let shoppingCartModel = new ShoppingCartModel();
		let shoppingCartView = new ShoppingCartView('sidebar', shoppingCartModel);

		this.shoppingCartController = new ShoppingCartController(shoppingCartModel, shoppingCartView);

		shoppingCartView.showCart();
		//return this.shoppingCartController;

	}

	navbar() {

		let innerHTML =
		`<div class="w3-top">
		  <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
		    <a id="navbarButton" class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"><i class="fa fa-bars"></i></a>
		    <a href="#" class="w3-bar-item w3-button w3-theme-l1">Start</a>`;

		for( let button of this.navbarButtonArray )
		{
			innerHTML+=`<a id="${button.id}" href="${button.href}" class="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white">${button.title}</a>`;
		}
		
		innerHTML += `</div></div>`;

		document.getElementById("navbar").innerHTML = innerHTML;
		document.getElementById("navbarButton").addEventListener('click', event => this.showSidebar() );

		//se vuelve a efectuar la misma iteración:
		//for(let button of this.navbarButtonArray)
		//document.getElementById(button.id).addEventListener(button.eventName, functionName)

		return innerHTML;
	}

	addButtonToNavbar( buttonData ) {

		this.navbarButtonArray.push(buttonData);
		this.navbar();
	}

	sidebar() {

		this.shoppingCart();
	}

	body() {

		this.product();
	}

	footer() {

		let innerHTML =
		`<footer id="myFooter">
		    <div class="">
		      <h4>Footer</h4>
		    </div>

		    <div class="">
		    </div>
		  </footer>`;
		document.getElementById("footer").innerHTML = innerHTML;

		return innerHTML;
	}

	show() {
		
		this.login();

		document.getElementById(this.id).addEventListener('click', event =>
			{
				if (event.target.classList.contains("addToCart")) this.shoppingCartController.onAddToCartButtonClick(event);
			});
	}
	
}

export { ApplicationView };
