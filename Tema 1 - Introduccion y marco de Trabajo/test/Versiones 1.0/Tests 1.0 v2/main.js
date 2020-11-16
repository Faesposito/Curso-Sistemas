/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import {ProductRemoteModel} from './Product-RemoteModel.js';
import {ProductView} from './Product-View.js';

let model = new ProductRemoteModel();
let view = new ProductView('Application', model);

//model.getAll().then( response => console.log(response.json()) );







