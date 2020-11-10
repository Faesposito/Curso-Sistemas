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

	onlogin()
	{
		this.innerView.normal();
	}
}

export { ApplicationController };
