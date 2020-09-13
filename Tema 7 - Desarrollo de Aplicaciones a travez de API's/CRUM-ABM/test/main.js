/*
	Example: UserCRUDApplication // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9
*/


//document.getElementById('submit').addEventListener("click", onNewClick());

/* 
let formdata = document.getElementById('signUpForm');

formdata.onSubmit = function () {
	alert("form submitted");
	return false;
}
 */



let formCheck = document.getElementById("commentform");

let data = document.forms["commentform"]["author"].value;
console.log(data);

formCheck.onsubmit = function () {


}

/* function onNewClick() {

	let myForm = document.getElementById('signUpForm');
	let formData = new FormData(myForm);

	console.log(formData);
} */