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

		return fetch( './Login/LoginModel.php', { method:'POST', body:JSON.stringify(message) } ) .
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
	
	isValidUserData( userData ) {

		let success = true;

		let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

		success = ( success && userData.hasOwnProperty('username') && userData.username != null && userData.username != '');
		success = ( success && userData.hasOwnProperty('password') && userData.password.match(passwordRegex) != null && userData.password != '' );
		success = ( success && userData.hasOwnProperty('confirmPassword') && userData.confirmPassword === userData.password );
		success = ( success && userData.hasOwnProperty('firstname') && userData.firstname != null && userData.firstname != '');
		success = ( success && userData.hasOwnProperty('surname') && userData.surname != null && userData.surname != '');
		success = ( success && userData.hasOwnProperty('email') && userData.email != null && userData.email != '');
		success = ( success && userData.hasOwnProperty('age') && userData.age != null && userData.age >= 18);
		success = ( success && userData.hasOwnProperty('address') && userData.address != null && userData.address != '');
		
		return success;
	};
	
};


export { LoginModel };