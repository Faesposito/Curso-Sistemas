/*
	Autor: Matías Gastón Santiago
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	https://educacion.batan.coop/course/view.php?id=9

*/

import { ProductController } from "./Product-Controller.js"

function createNewProductDataForm(defaultValues )
{
	let innerHTML = 
	`<form id="newProductForm" name="newProductForm">
		<h1>Create New Product</h1>
		<input type="text" name="name" placeholder='Name:' value="${defaultValues.name}"/>
		<input type='text' name="type" placeholder='Type:' value="${defaultValues.type}" />
		<input type='text' name="price" placeholder='Price:' value="${defaultValues.price}" />
		<input type='text' name="quantity" placeholder='Quantity:' value="${defaultValues.quantity}" />
	</form>
	`;

	return innerHTML;
}

function editProductDataForm(defaultValues)
{
	let innerHTML = 
	`<form id="editProductForm" name="editProductForm">
		<h1>Edit Product</h1>
		<input type="text" name="name" placeholder='Name:' value="${defaultValues.name}"/>
		<input type='text' name="type" placeholder='Type:' value="${defaultValues.type}" />
		<input type='text' name="price" placeholder='Price:' value="${defaultValues.price}" />
		<input type='text' name="quantity" placeholder='Quantity:' value="${defaultValues.quantity}" />
	</form>
	`;

	return innerHTML;
}

function deleteProductDataForm(defaultValues )
{
	let innerHTML = 
	`<form id="deleteProductForm" name="deleteProductForm">
		<h1>Delete Product</h1>
		<input type="text" name="name" placeholder='Name:' value="${defaultValues.name}"/>
		<input type='text' name="type" placeholder='Type:' value="${defaultValues.type}" />
		<input type='text' name="price" placeholder='Price:' value="${defaultValues.price}" />
		<input type='text' name="quantity" placeholder='Quantity:' value="${defaultValues.quantity}" />
	</form>
	`;

	return innerHTML;
}

class ProductView
{
	constructor( id, model )
	{
		this.id = id;
		this.innerModel = model;

		this.innerController = new ProductController(model, this);

		this.update();

		this.productDefaultData =
		{
			name:'Quara',
			type:"vino",
			price:'100',
			quantity:'100',
		};
	}

	update()
	{
		this.innerModel.getAll().then( response => this.updateFrom(response.json()) );		
	}
	
	updateFrom( productPromise )
	{
		productPromise.then( productArray =>
		{
			let innerHTML = 
			`<h1> Products </h1>

			<div id= "Containner" class="Containner">
				<div class="TabbleContainer">
					<table id="${this.id}TabbleContainer">
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Price</th>
							<th>Quantity</th>
							<th colspan=2>Acciones</th>
						</tr>`;

			if ( productArray.length > 0 )
			{
				for( let product of productArray )
				{
					innerHTML += 
					`<tr>
					<td>${product.name}</td>
					<td>${product.type}</td>
					<td>${product.price}</td>
					<td>${product.quantity}</td>
					<td>
							<button class="editProduct" >Editar</button>
					</td>
					<td>
							<button class="deleteProduct" >Borrar</button>
					</td>
					<tr>`
				}
			}
			else
			{
				innerHTML += `<tr><td colspan="6">No hay datos disponibles</td></tr>`;
			};

			innerHTML += `     
			</table>
				</div>
				<div class="ButtonContainner">
				<button id="${this.id}NewProductButton" class="newProduct">Nuevo Producto</button>
				</div>
			</div>

			<div class= "newProductModalContainner" id='newProductModal'>
				<button id="${this.id}closeNewProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${createNewProductDataForm(this.id, this.productDefaultData)}
				<button id="${this.id}submitNewProductForm" type="submit">Crear</button>
				</div>
			</div>
			<div class= "editProductModalContainner" id='editProductModal'>
				<button id="${this.id}closeEditProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${editProductDataForm(this.id, this.productDefaultData)}
				<button id="${this.id}submitEditProductForm" type="submit">Edit</button>
				</div>
			</div>
			<div class= "deleteProductModalContainner" id='deleteProductModal'>
				<button id="${this.id}closeDeleteProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${deleteProductDataForm(this.id, this.productDefaultData)}
				<button id="${this.id}submitDeleteProductForm" type="submit">Delete</button>
				</div>
			</div>`;

			/***********************************     Event Listeners      ********************************************************/

			document.getElementById( this.id ).innerHTML = innerHTML;

			document.getElementById( this.id + 'NewProductButton').addEventListener('click', event => this.innerController.onNewProductButtonClick(event) );

			document.getElementById(this.id).addEventListener('click', event =>
			{
				if (event.target.classList.contains("editProduct")) this.innerController.onEditProductButtonClick(event);
				if (event.target.classList.contains("deleteProduct")) this.innerController.onDeleteProductButtonClick(event);
				if (event.target.classList.contains("closeModalButton")) this.innerController.onCloseModalButtonClick(event);
			});

			document.getElementById( this.id + 'submitNewProductForm').addEventListener('click', event => this.innerController.onNewProductConfirmButtonClick(event) );
			//document.getElementsByClassName('closeModalButton').addEventListener('click', event => this.innerController.onCloseModalButtonClick(event) );
				
		});
	}

}

export { ProductView };
