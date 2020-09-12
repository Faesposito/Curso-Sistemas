/*
	Example: UserView Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9
*/



class UserView {

  constructor(id, model) {

    this.innerModel = model;
    this.id = id;

    this.update();
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

      <div class="Containner">
        <div id="TabbleContainerID" class="TabbleContainer">
            <table>
                <tr>
                    <th>Username</th>
                    <th>Nombre de usuario</th>
                    <th>Contraseña</th>
                    <th colspan=2>Acciones</th>
                </tr>`;

    for (let user of this.innerModel.getAll()) {
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

    html +=
      `     </table>
        </div>
        <div class="ButtonContainner">
          <button id="${this.id}btnNewUser" class="newUser">Nuevo Usuario</button>
        </div>
      </div>`;


    document.getElementById(this.id).innerHTML = html;

    document.getElementById(`${this.id}btnNewUser`).addEventListener("click", (event) => this.onNewUserButtonClick(event));

    document.getElementById("TabbleContainerID").addEventListener("click", (event) => {
      if (event.target.classList.contains("editUser")) this.onEditButtonClick(event);
      if (event.target.classList.contains("deleteUser")) this.onDeleteButtonClick(event);
    });

  }

  newUserModal() {
    let modal = document.getElementById("newUserModal");
    modal.style.display = "block";
  }

  onNewUserButtonClick() {

    this.newUserModal();

    this.innerModel.create({
      username: window.prompt("Ingrese Username para el nuevo usuario"),
      name: window.prompt("Ingrese el Nombre del nuevo usuario"),
      password: window.prompt("Ingrese el Password del nuevo usuario"),
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

  }

  onDeleteButtonClick() {
    this.innerModel.delete(window.prompt("Ingrese el Username que desea Borrar"));
  }
}

export {
  UserView
};