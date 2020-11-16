/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import {ApplicationModel} from './ApplicationModel.js';

class ApplicationController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;
	}

	onLogin() {

		this.innerView.normal();
	}

	onAdminLogin() {
		
		this.innerView.admin();
	}

	buyProductsClick() {

		this.innerView.buyButtonRefresh();
	}
}

export { ApplicationController };
