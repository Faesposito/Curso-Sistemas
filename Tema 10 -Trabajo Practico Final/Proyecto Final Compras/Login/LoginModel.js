/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class LoginModel extends EventTarget
{
	constructor()
	{
		super();
	};

	static getUserAccessKey()
	{
		
	}

	login(userData)
	{
		let message =
		{
			action:'login',
			key: null,
			body: userData
		};

		return fetch( './Login/LoginModel.php', { method:'POST', body:JSON.stringify(message) } ).
		then( response => response.json() );
	}

	register(key, userData)
	{
		let message =
		{
			action:'register',
			key: key,
			body: userData
		};

		return fetch( './Login/LoginModel.php', { method:'POST', body:JSON.stringify(message) } );
	}

	
};


export { LoginModel };