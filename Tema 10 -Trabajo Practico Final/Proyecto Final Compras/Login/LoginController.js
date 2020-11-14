/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

class LoginViewController
{
	constructor( model, view )
	{
		this.innerView = view;
		this.innerModel = model;

		this.accessKey = null;
	}

	onLoginButtonClick(event)
	{
		let data = this.innerView.getLoginFormData();

		this.innerModel.login(data).then( response => 
		{
			this.accessKey = response.key;
			window.alert( 'NextAccessKey:'+this.accessKey+' Response:'+ response.body );
			if(response.body === 'isAdmin') {

				this.innerView.dispatchEvent( new CustomEvent('adminLogin', { 'detail': response.id }) );	
			}
			else {
	
				this.innerView.dispatchEvent( new CustomEvent('login', { 'detail': response.id }) );
			}			
		});
		//cortar la propagación del evento.
		event.preventDefault();
	}

	onRegisterButtonClick(event)
	{
		let data = this.innerView.getLoginFormData();
		
		this.innerModel.register(this.accessKey,data).then( response => 
		{
			this.accessKey = response.key;
			window.alert( 'NextAccessKey:'+this.accessKey+' Response:'+ response.body );
		});

		//cortar la propagación del evento.
		event.stopPropagation();
		event.preventDefault();
	}

}

export { LoginViewController };
