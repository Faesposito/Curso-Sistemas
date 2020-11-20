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

		this.showLogin();	
	}

	showLogin()
	{
		let innerHTML = 
		`<div class="">  
      		<div class=""><br>
        		<img src="./Login/resource/avatar.png" alt="Avatar" style="width:30%" class="">
      		</div>

			<form id="${this.id}loginForm" class="">
				<div class="">
					<label><b>Username</b></label>
					<input class="" type="text" placeholder="Enter Username" name="username" required>
					<label><b>Password</b></label>
					<input class="" type="password" placeholder="Enter Password" name="password" required>
					<button id="${this.id}btnLogin" class="">Login</button>
					<button id="${this.id}btnRegister" class="">Register</button>
				</div>
			</form>
		</div>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller-attach
		document.getElementById(this.id+'btnLogin').addEventListener('click', event => this.innerController.onLoginButtonClick(event));
		document.getElementById(this.id+'btnRegister').addEventListener('click', event => this.innerController.onRegisterButtonClick(event));

	}

	showRegister()
	{
		let innerHTML = 
		`<form id="${this.id}registerForm" class="">

		<table class="w3-container ">
		   <thead>
			  <th>
				 <caption class="w3-light-grey">Create Account</caption>
			  </th>
		   </thead>
		   <tbody>
				<tr>
					<td colspan="2">
						<label> Username *</label></br>
						<input class="w3-input w3-border w3-round" type="text" name="username" placeholder="Enter your Username: " required />
					</td>
				</tr>
				<tr>
					<td>
						<label> Password *</label></br>
						<input class="w3-input w3-border w3-round" type="password" name="password" placeholder="Enter your password: " required />
					</td>
					<td>
						<label> Confirm Password *</label></br>
						<input class="w3-input w3-border w3-round" type="password" name="confirmPassword" placeholder="Enter your password again: " required />
					</td>
				</tr>
				<tr>
					<td>
						<label> First Name *</label><br>
						<input class="w3-input w3-border w3-round" type="text" name="firstName" placeholder="Enter your first name: " required />
					</td>
					<td>
						<label> Last Name </label><br>
						<input class="w3-input w3-border w3-round" type="text" name="surname" placeholder="Enter your last name: " />
					</td>
			  	</tr>
			  	<tr>
					<td colspan="2">
					<label>Email *</label><br>
					<input class="w3-input w3-border w3-round" type="email" name="email" placeholder="Enter your email: " required />
					</td>
			  	</tr>	
			  	<tr>
					<td>
						<label for="age"> Age </label><br>
						<input class="w3-input w3-border w3-round" type="text" name="age" id="age" value="18">
					</td>
					<td>
						<label for="address"> Address </label><br>
						<input class="w3-input w3-border w3-round" type="text" name="address" id="address" value="18">
					</td>
				</tr>
		   </tbody>
		   <tfooter>
			  <th colspan="2" class=" footer w3-light-grey">
				 <input id="${this.id}registerSubmit" class="create-button w3-text-white w3-right w3-border w3-round" type="submit" value="Create" />
			  </th>
		   </tfooter>
		</table>
	 </form>`;

		document.getElementById(this.id).innerHTML = innerHTML;

		//Controller-attach
		document.getElementById(this.id+'registerSubmit').addEventListener('click', event => this.innerController.onRegisterSubmitButtonClick(event));

	}

	getLoginFormData()
	{
		let formViewData = new FormData( document.getElementById( this.id +'loginForm') );
		let formData = Object.fromEntries(formViewData);

		return formData;
	}

	getRegisterFormData()
	{
		let formViewData = new FormData( document.getElementById( this.id +'registerForm') );
		let registerFormData = Object.fromEntries(formViewData);

		return registerFormData;
	}

}

export { LoginView };
