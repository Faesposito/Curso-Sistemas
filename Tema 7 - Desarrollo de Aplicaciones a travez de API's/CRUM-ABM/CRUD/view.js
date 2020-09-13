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

    this.modalStatus = false;

  }

  update() {

    let html = `

      <div id='newUserModal'>
        <div class='signUpForm'>
          <form id="signUpForm" name="signUpForm">
            <h1>Create New User</h1>
            <input type="text" id="username" name="username" placeholder='Username:' autocomplete="Username" />
            <input type='text' id="name" name="name" placeholder='Name:' autocomplete="name" />
            <input type='password' id="password" name="password" placeholder='Password:' autocomplete="current-password" />
            <button id="submitForm" type="submit">Crear</button>
            <button id="closeModal">Cerrar</button>
          </form>
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



    /*********************************************************************************************************************/
    /***********************************     Event Listeners      ********************************************************/
    /*********************************************************************************************************************/


    document.getElementById(this.id).innerHTML = html;

    document.getElementById(`${this.id}btnNewUser`).addEventListener("click", (event) => this.innerController.onNewUserButtonClick(event));

    document.getElementById("TabbleContainerID").addEventListener("click", (event) => {
      if (event.target.classList.contains("editUser")) this.innerController.onEditButtonClick(event);
      if (event.target.classList.contains("deleteUser")) this.innerController.onDeleteButtonClick(event);
    });

    document.getElementById("closeModal").addEventListener("click", (event) => this.innerController.onCloseModalClick(event));
    document.querySelector('form').addEventListener('submit', (event) => this.innerController.onModalSubmitNewUserClick(event));


    /*********************************************************************************************************************/
    /*********************************** End of Event Listeners **********************************************************/
    /*********************************************************************************************************************/
  }

  modalSwitch() {

    if (!this.modalStatus) {

      document.getElementById("newUserModal").style.display = "block";
      document.getElementById("ContainnerID").style.display = "none";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

      return this.modalStatus = true;

    } else {

      document.getElementById("newUserModal").style.display = "none";
      document.getElementById("ContainnerID").style.display = "block";

      return this.modalStatus = false;
    }

  }

}

export {
  UserView
};