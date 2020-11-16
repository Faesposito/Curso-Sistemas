/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class ApplicationModel extends EventTarget
{
	constructor()
	{
		super();
	};

	clientModelTest()
	{
		return '¡Hello World From Client Code!';
	}

	serverModelTest()
	{
		let message =
		{
			action:'test',
			body: null
		};

		return fetch( './ApplicationModel.php', { method:'POST', body:JSON.stringify(message) } ).then( response => response.json() );
	}

};


export { ApplicationModel };