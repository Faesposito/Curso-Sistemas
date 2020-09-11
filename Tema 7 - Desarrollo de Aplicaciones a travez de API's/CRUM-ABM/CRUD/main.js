/*
	Example: UserCRUDApplication // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9
*/

import {
	UserModel
} from "./model.js";

import {
	UserView
} from './view.js';

let model = new UserModel();
let view = new UserView('crud', model);

model.addEventListener('change', event => view.update(event))