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

  eventListeners() 
  {
    /*El problema de porqué hay que hacer click dos veces para que funcione, es porque estás usando uno de los clicks
    para hacer la primera asociación de próximos eventos de click.
    Fijate que la primera sentencia, pasa por parámetro una función que se encarga de asignar otra función de respuesta para el click.
    Con lo cual, un click te queda con el objetivo de hacer la asociación, y de ahí en adelante, el próximo click queda vinculado a la pantalla de edición.

    Esto se soluciona en otra parte.. te dejo el código expresado en la función update/

    document.getElementById("CrudWrapperID").addEventListener("click", (event) => {
      if (event.target.matches("button.editUser")) {
        document.getElementById(event.target.id).addEventListener("click", (event) => this.onEditButtonClick(event));
      } else if (event.target.matches("button.deleteUser")) {
        document.getElementById(event.target.id).addEventListener("click", (event) => this.onDeleteButtonClick(event));
      } else {
        return;
      }
    });

    */
  }

  update() {
    let html =
      `<h1> <span>C.R.U.D</span> Users</h1>
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
      </div>
		<br>
		<button id="${this.id}btnNewUser" class= "newUser" >Nuevo Usuario</button>
    `;

    document.getElementById(this.id).innerHTML = html;

    document.getElementById(this.id + "btnNewUser").addEventListener("click", (event) => this.onNewUserButtonClick(event));

    /*La asociación de evento de los botones editar y borrar quedaría de esta manera.
    Hay muchas maneras de hacerlo, acá te propongo una de las más simples y en mi opinión la mejor manera de hacerlo.
    Asignás una escucha de click sobre toda la tabla, pero solo contestás el click, cuando el elemento original que recibe el 
    click se trata de un elemento que contiene la clase editUser, o deleteUser.

    */

    document.getElementById("CrudWrapperID").addEventListener("click", (event) =>
    {
      //event.target <-- Devuelve el elemento que recibió el click, aunque estemos escuchando el click sobre toda la tabla.
      console.log(event.target);

      //Si el elemento que recibió el click contiene la clase editUser, entonces contesto con la ejecución de onEditButtonClick
      if ( event.target.classList.contains("editUser") )
        this.onEditButtonClick(event);

      //..idem para delete
      if ( event.target.classList.contains("deleteUser") )
        this.onDeleteButtonClick(event);
    });

    /*No es la única manera de hacerlo, esta es la más simple y la que menos código lleva.
    La otra es que recorras todos los elementos <tr> de la tabla, localices el botton en cuestión y asignes la función
    de respuesta para c/u, generalmente se encuentra esa opción por internet como forma rápida de solución. 
    El problema con ese enfoque es que sobrecargás mucho la memoria del navegador si tu lista tiene más de 10000 filas*/


    //this.eventListeners();
  }

  checkIfIsRight() {
    if (this.innerModel.isUsernameAlreadyExists(id) === false) {
      alert("Ese Nombre esta en uso");
    }
  }

  onNewUserButtonClick() {
    let userName = window.prompt("Ingrese Username para el nuevo usuario");
    let name = window.prompt("Ingrese el Nombre del nuevo usuario");
    let pass = window.prompt("Ingrese el Password del nuevo usuario");

    this.innerModel.create({
      username: userName,
      name: name,
      password: pass,
    });
    this.update();
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