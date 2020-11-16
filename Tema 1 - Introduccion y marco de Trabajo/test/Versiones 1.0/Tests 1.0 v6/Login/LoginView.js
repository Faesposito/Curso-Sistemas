/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import { LoginViewController } from "./LoginController.js"

class LoginView extends EventTarget
{
	constructor( id, model )
	{
		super();
		
		this.id = id;
		this.innerModel = model;

		this.innerController = new LoginViewController(model, this);

		this.show();

		
	}

	show()
	{
		let innerHTML = 
		`<div class="w3-container">  
      		<div class="w3-center"><br>
        		<img src="./Resources/avatar.png" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
      		</div>

			<form id="${this.id}loginFrm" class="w3-container">
				<div class="w3-section">
					<label><b>Username</b></label>
					<input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" required>
					<label><b>Password</b></label>
					<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="password" required>
					<button id="${this.id}btnLogin" class="w3-button w3-block w3-green w3-section w3-padding">Login</button>
					<button id="${this.id}btnRegister" class="w3-button w3-block w3-green w3-section w3-padding">Register</button>
				</div>
			</form>
		</div>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller-attach
		document.getElementById(this.id+'btnLogin').addEventListener('click', event => this.innerController.onLoginButtonClick(event));
		document.getElementById(this.id+'btnRegister').addEventListener('click', event => this.innerController.onRegisterButtonClick(event));

	}

	getLoginFormData()
	{
		let formViewData = new FormData( document.getElementById( this.id +'loginFrm') );
		let formLoginData = Object.fromEntries(formViewData);

		return formLoginData;
	}


}

export { LoginView };
