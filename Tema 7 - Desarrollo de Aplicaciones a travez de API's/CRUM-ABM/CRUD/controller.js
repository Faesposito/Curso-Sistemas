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

	/*************** Modal Controls ********************/

	activeModal(containner) {

		containner.classList.add("active");
		document.getElementById("ContainnerID").style.display = "none";
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

	}

	removeActiveModal(containner) {

		containner.classList.remove("active");
		document.getElementById("ContainnerID").style.display = "block";
		document.body.style.backgroundColor = "#1abc9c79";

	}

	/************ End Of Modal Controls ****************/


	/****************** New User Modal ************************/

	onNewUserButtonClick() {

		const newUserModal = document.getElementById("newUserModal");
		this.activeModal(newUserModal);

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
			document.body.style.backgroundColor = "#1abc9c79";

		} else {

			window.alert('El nombre de usuario solicitado ya existe.');
			event.preventDefault();

		}

	}

	onCloseNewUserModalClick() {

		const newUserContainner = document.getElementById("newUserModal");
		this.removeActiveModal(newUserContainner);

	}

	/*************** End Of New User Modal ********************/


	/****************** Edit User Modal ************************/

	onEditButtonClick() {

		const editUserModal = document.getElementById("editUserModal");
		this.activeModal(editUserModal);

	}

	onModalSubmitEditUserClick() {

		let formData = new FormData(event.target);

		let userNameToEdit = formData.get('usernameToEdit');

		if (this.innerModel.isUsernameAlreadyExists(userNameToEdit)) {

			let editedUserData = {
				username: formData.get('username'),
				name: formData.get('name'),
				password: formData.get('password')
			}

			this.innerModel.edit(userNameToEdit, editedUserData);
			document.body.style.backgroundColor = "#1abc9c79";

		} else {
			window.alert('El usuario que intenta editar no existe.');
			event.preventDefault();
		}

	}

	onCloseEditUserModalClick() {

		const editUserContainner = document.getElementById("editUserModal");
		this.removeActiveModal(editUserContainner);
	}

	/*************** End Of Edit User Modal ********************/


	/****************** Delete User Modal ************************/

	onDeleteButtonClick() {

		const deleteUserModal = document.getElementById("deleteUserModal");
		this.activeModal(deleteUserModal);

	}

	onModalSubmitDeleteUserClick() {

		let formData = new FormData(event.target);

		let userNameToDelete = formData.get('usernameToDelete');

		if (this.innerModel.isUsernameAlreadyExists(userNameToDelete)) {
			if (window.confirm('¿Está seguro de borrar el usuario?')) {
				this.innerModel.delete(userNameToDelete);
			}
			document.body.style.backgroundColor = "#1abc9c79";
		} else {
			window.alert('El usuario que intenta borrar no existe.');
			event.preventDefault();
		}
	}

	onCloseDeleteUserModalClick() {

		const deleteUserContainner = document.getElementById("deleteUserModal");
		this.removeActiveModal(deleteUserContainner);

	}

	/*************** End Of Delete User Modal ********************/


}

export {
	UserViewController
};