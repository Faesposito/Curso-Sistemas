/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/


class UserViewController {

	constructor(model, view) {

		this.innerView = view;
		this.innerModel = model;

		this.innerModel.addEventListener('change', event => this.innerView.update());
		this.innerView.update();

	}

	onNewUserButtonClick() {

		this.innerView.modalSwitch();

	}

	onEditButtonClick() {

		//this.innerView.modalSwitch(event);

		let userNameToEdit = window.prompt("Ingrese Username que desea Editar");

		if (this.innerModel.isUsernameAlreadyExists(userNameToEdit)) {

			let editedUserData = {
				username: window.prompt("Ingrese Username para el nuevo usuario"),
				name: window.prompt("Ingrese el Nombre del nuevo usuario"),
				password: window.prompt("Ingrese el Password del nuevo usuario"),
			};

			this.innerModel.edit(userNameToEdit, editedUserData);

		} else {
			window.alert('El usuario que intenta editar no existe.');
		}

	}

	onCloseModalClick() {

		this.innerView.modalSwitch();

	}

	onDeleteButtonClick() {

		let userNameToDelete = window.prompt('Ingrese username para eliminar');

		if (this.innerModel.isUsernameAlreadyExists(userNameToDelete)) {
			if (window.confirm('¿Está seguro de borrar el usuario?')) {
				this.innerModel.delete(userNameToDelete);
			}
		} else {
			window.alert('El usuario que intenta borrar no existe.');
		}
	}

	onModalSubmitNewUserClick() {

		let formData = new FormData(event.target);

		let data = {
			username: formData.get('username'),
			name: formData.get('name'),
			password: formData.get('password')
		}

		if (!this.innerModel.isUsernameAlreadyExists(data.username)) {

			this.innerModel.create({
				username: formData.get('username'),
				name: formData.get('name'),
				password: formData.get('password')
			});

		} else {

			window.alert('El nombre de usuario solicitado ya existe.');
			event.preventDefault();

		}

	}

	onModalSubmitEditUserClick() {

		let formData = new FormData(event.target);

		let userNameToEdit = formData.userNameToEdit;

		if (this.innerModel.isUsernameAlreadyExists(userNameToEdit)) {

			let editedUsedData = {
				username: formData.get('username'),
				name: formData.get('name'),
				password: formData.get('password')
			}

			this.innerModel.edit(userNameToEdit, editedUserData);

		} else {
			window.alert('El usuario que intenta editar no existe.');
			event.preventDefault();
		}

	}
}

export {
	UserViewController
};