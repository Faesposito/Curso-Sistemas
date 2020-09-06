/*
	Example: UserModel Module // CRUD-Development
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

class UserModel
{
	constructor()
	{
		this.innerData = new Array();
	};

	create( userData )
	{
		if ( this.isValidUserData(userData) && this.isUsernameAlreadyExists(userData.username) )
		{
			this.innerData.push( userData );
		}
	}

	edit( username, newUserData )
	{
		let index = this.innerData.findIndex( user => user.username === username );

		if ( index >= 0 && this.isValidUserData(newUserData) && this.isUsernameAlreadyExists(userData.username) )
		{
			Object.assign(this.innerData[index], newUserData);
		}
	};

	delete( username )
	{
		let index = this.innerData.findIndex( user => user.username === username );

		if ( index >= 0 )
		{
			this.innerData.splice(index,1);
		}
	};

	getByUsername( username )
	{
		if ( typeof(username) === 'string' )
		{
			let index = this.innerData.findIndex( user => user.username === username );

			return ( index >= 0 )? this.innerData[index] : null;
		}
		else
		{
			return null;
		}
	};

	getAll()
	{
		return this.innerData;
	};

	isUsernameAlreadyExists( username )
	{
		return ( this.getByUsername( username ) == null )? true : false;
	};

	isValidUserData( userData )
	{
		let success = true;

		let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

		success = ( success && userData.hasOwnProperty('username') && userData.username != null );
		success = ( success && userData.hasOwnProperty('name') && userData.name != null );
		success = ( success && userData.hasOwnProperty('password') && userData.password.match(passwordRegex) );

		return success;
	};

};


export { UserModel };