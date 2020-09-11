/*
	Example: UserView Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import {
  UserModel
} from "./model.js";

class UserView {

  constructor(id) {
    this.innerModel = new UserModel();
    this.id = id;

    this.update();
  }

  eventListeners() {
    document.getElementById("CrudWrapperID").addEventListener("click", (event) => {
      if (event.target.matches("button.editUser")) {
        document.getElementById(event.target.id).addEventListener("click", (event) => this.onEditButtonClick(event));
      } else if (event.target.matches("button.deleteUser")) {
        document.getElementById(event.target.id).addEventListener("click", (event) => this.onDeleteButtonClick(event));
      } else {
        return;
      }
    });
  }

  update() {
    let html =
      `
      <div id='newUserModal'>
        <div class='signup'>
            <form>
                <h1>Create New User</h1>
                <input id="userNameInfo" type='text' placeholder='UserName:' autocomplete="username" />
                <input id="nameInfo" type='text' placeholder='Name:' autocomplete="name" />
                <input id="passwordInfo" type='password' placeholder='Password:' autocomplete="current-password" />
                <button id="submit" type="submit">Crear</button>
                <button id="cancel" type="reset">Cancelar</button>
            </form>
        </div>
      </div>

      <h1> C.R.U.D Users</h1>

      <div class="CrudContainner">
        
		      <table id="CrudWrapperID" class="CrudWrapper">
            <thead>
              <th>Username</th>
              <th>Nombre de usuario</th>
              <th>Contraseña</th>
              <th colspan = 2 >Acciones</th>
            <thead>`;

    for (let user of this.innerModel.getAll()) {
      html += `<tr>
				<td>${user.username}</td>
				<td>${user.name}</td>
				<td>${user.password}</td>
				<td>
						<button id="${user.username}-editButton" class="editUser" >Editar</button>
				</td>
				<td>
						<button id="${user.username}-deleteButton" class="deleteUser" >Borrar</button>
				</td>
			<tr>`;
    }

    html +=
      `</table>
      <div class= "containnerButton">
        <button id="${this.id}btnNewUser" class= "newUser" >Nuevo Usuario</button> 
      </div>
      </div>
		<br>
    
    
    `;

    document.getElementById(this.id).innerHTML = html;

    document.getElementById(this.id + "btnNewUser").addEventListener("click", (event) => this.onNewUserButtonClick(event));

    this.eventListeners();
  }

  checkIfIsRight() {
    if (this.innerModel.isUsernameAlreadyExists(id) === false) {
      alert("Ese Nombre esta en uso");
    }
  }

  newUserModal() {

    let modal = document.getElementById("newUserModal");
    modal.style.display = "block";

  }

  onNewUserButtonClick() {

    this.newUserModal();

    let userName = window.prompt("Ingrese Username para el nuevo usuario");
    let name = window.prompt("Ingrese el Nombre del nuevo usuario");
    let pass = window.prompt("Ingrese el Password del nuevo usuario");

    this.innerModel.create({
      username: userName,
      name: name,
      password: pass,
    });

  }

  onEditButtonClick() {
    let userNameToEdit = window.prompt("Ingrese Username que desea Editar");

    let editedUserData = {
      username: window.prompt("Ingrese Username para el nuevo usuario"),
      name: window.prompt("Ingrese el Nombre del nuevo usuario"),
      password: window.prompt("Ingrese el Password del nuevo usuario"),
    };

    this.innerModel.edit(userNameToEdit, editedUserData);
    this.update();
  }

  onDeleteButtonClick() {
    let userName = window.prompt("Ingrese el Username que desea Borrar");
    window.confirm("¿Está seguro de borrar el usuario?");
    this.innerModel.delete(userName);
    this.update();
  }
}

export {
  UserView
};