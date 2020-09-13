/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class UserModel extends EventTarget {


	constructor() {

		super();
		this.innerData = new Array();

	};

	create(userData) {

		if (this.isValidUserData(userData)) {
			this.innerData.push(userData);
			this.dispatchEvent(new CustomEvent("change"));
		} else this.dispatchEvent(new CustomEvent("change"));

	}


	edit(username, newUserData) {

		let index = this.innerData.findIndex(user => user.username === username);

		if (index >= 0 && this.isValidUserData(newUserData)) {
			Object.assign(this.innerData[index], newUserData);
			this.dispatchEvent(new CustomEvent("change"));
		}

	};

	delete(username) {

		let index = this.innerData.findIndex(user => user.username === username);

		if (index >= 0) {
			this.innerData.splice(index, 1);
			this.dispatchEvent(new CustomEvent("change"));
		}

	};

	getByUsername(username) {

		if (typeof (username) === 'string') {
			let index = this.innerData.findIndex(user => user.username === username);

			return (index >= 0) ? this.innerData[index] : null;
		} else {
			return null;
		}

	};

	getAll() {

		return this.innerData;

	};

	isUsernameAlreadyExists(username) {

		return (this.getByUsername(username) == null) ? false : true;

	};

	isPasswordValid(userData) {

		let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

		if (userData.hasOwnProperty('password') && userData.password.match(passwordRegex)) {
			return true;
		} else {
			alert("El Password no cumple con los requerimientos.");
			return false;
		}

	};

	isValidUserData(userData) {

		let success = true;
		success = (success && userData.hasOwnProperty('username') && userData.username != null);
		success = (success && userData.hasOwnProperty('name') && userData.name != null);
		success = this.isPasswordValid(userData);

		if (success)
			return success;
		else
			alert("No Cumple con lo Solicitado");
		return success;

	};

};


export {
	UserModel
};