/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

import {
  UserViewController
} from "./controller.js"

class UserView {

  constructor(id, model) {

    this.id = id;

    this.innerModel = model;

    this.innerController = new UserViewController(model, this);

  }

  update() {

    let html = `

      <div class= "newUserModalContainner" id='newUserModal'>
        <div class='ModalForm'>
          <form id="signUpForm" name="signUpForm">
            <h1>Create New User</h1>
            <input type="text" name="username" placeholder='Username:' autocomplete="Username" />
            <input type='text' name="name" placeholder='Name:' autocomplete="name" />
            <input type='password' name="password" placeholder='Password:' autocomplete="current-password" />
            <button id="submitNewUserForm" type="submit">Crear</button>
          </form>
          <button id="newUserCloseModal">Cerrar</button>
        </div>
      </div>

      <div class= "editUserModalContainner" id='editUserModal'>
        <div class='ModalForm'>
          <form id="editUserForm" name="editUserForm">
            <h1>Edit User</h1>
            <input type="text" name="usernameToEdit" placeholder='Username To Edit:' autocomplete="Username" />
            <input type="text" name="username" placeholder='Username:' autocomplete="Username" />
            <input type='text' name="name" placeholder='Name:' autocomplete="name" />
            <input type='password' name="password" placeholder='Password:' autocomplete="current-password" />
            <button id="submitEditUserForm" type="submit">Editar Usuario</button>
          </form>
          <button id="editUserCloseModal">Cerrar</button>
        </div>
      </div>

      <div class= "deleteModalContainner" id='deleteUserModal'>
        <div class='ModalForm'>
          <form id="deleteUserForm" name="deleteUserForm">
            <h1>Delete User</h1>
            <input type="text" name="usernameToDelete" placeholder='Username To Delete:' autocomplete="Username" />
            <button id="submitDeleteUserForm" type="submit">Borrar Usuario</button>
          </form>
          <button id="deleteUserCloseModal">Cerrar</button>
        </div>
      </div>

      <h1> C.R.U.D Users</h1>

      <div id= "ContainnerID" class="Containner">
        <div id="TabbleContainerID" class="TabbleContainer">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Nombre de usuario</th>
                    <th>Contraseña</th>
                    <th colspan=2>Acciones</th>
                </tr>`;

    let userArray = this.innerModel.getAll();

    if (userArray.length > 0) {

      for (let user of userArray) {

        html += `<tr>
				<td>${user.username}</td>
				<td>${user.name}</td>
				<td>${user.password}</td>
				<td>
						<button class="editUser" >Editar</button>
				</td>
				<td>
						<button class="deleteUser" >Borrar</button>
				</td>
      <tr>`;

      }

    } else {
      html += `<tr><td colspan="4">No hay datos disponibles</td></tr>`;
    }

    html += `     
    </table>
        </div>
        <div class="ButtonContainner">
          <button id="${this.id}btnNewUser" class="newUser">Nuevo Usuario</button>
        </div>
      </div>`;


    /***********************************     Event Listeners      ********************************************************/

    document.getElementById(this.id).innerHTML = html;

    document.getElementById(`${this.id}btnNewUser`).addEventListener("click", (event) => this.innerController.onNewUserButtonClick(event));

    document.getElementById("TabbleContainerID").addEventListener("click", (event) => {
      if (event.target.classList.contains("editUser")) this.innerController.onEditButtonClick(event);
      if (event.target.classList.contains("deleteUser")) this.innerController.onDeleteButtonClick(event);
    });

    document.getElementById("newUserCloseModal").addEventListener("click", (event) => this.innerController.onCloseNewUserModalClick(event));
    document.getElementById("editUserCloseModal").addEventListener("click", (event) => this.innerController.onCloseEditUserModalClick(event));
    document.getElementById("deleteUserCloseModal").addEventListener("click", (event) => this.innerController.onCloseDeleteUserModalClick(event));
    document.querySelector('form#signUpForm').addEventListener('submit', (event) => this.innerController.onModalSubmitNewUserClick(event));
    document.querySelector('form#editUserForm').addEventListener('submit', (event) => this.innerController.onModalSubmitEditUserClick(event));
    document.querySelector('form#deleteUserForm').addEventListener('submit', (event) => this.innerController.onModalSubmitDeleteUserClick(event));

    /*********************************** End of Event Listeners **********************************************************/


  }

}

export {
  UserView
};