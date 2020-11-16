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
		<input type="text" name="name" placeholder='Name: Nombre del Producto' value="${defaultValues.name}"/>
		<input type='text' name="category" placeholder='Category: Tipo del Producto' value="${defaultValues.category}" />
		<input type='text' name="price" placeholder='Price: Precio del Producto' value="${defaultValues.price}" />
		<input type='text' name="quantity" placeholder='Quantity: Cantidad a Ingresar' value="${defaultValues.quantity}" />
		<input type='text' name="description" placeholder='Description: Cantidad a Ingresar' value="${defaultValues.description}" />
	</form>
	`;
	return innerHTML;
}

function editProductDataForm(defaultValues)
{
	let innerHTML = 
	`<form id="editProductForm" name="editProductForm">
		<h1>Edit Product</h1>
		<input type="text" name="productToEditName" placeholder='Nombre del Producto a Editar' value=""/>
		<input type="text" name="name" placeholder='Name: Nombre del Producto' value="${defaultValues.name}"/>
		<input type='text' name="category" placeholder='Category: Tipo del Producto' value="${defaultValues.category}" />
		<input type='text' name="price" placeholder='Price: Precio del Producto' value="${defaultValues.price}" />
		<input type='text' name="quantity" placeholder='Quantity: Cantidad a Ingresar' value="${defaultValues.quantity}" />
	</form>
	`;

	return innerHTML;
}

function deleteProductDataForm(defaultValues )
{
	let innerHTML = 
	`<form id="deleteProductForm" name="deleteProductForm">
		<h1>Delete Product</h1>
		<input type="text" name="productToDeleteName" placeholder='Nombre del Producto a Eliminar' value=""/>
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
			category:"vino",
			price:'100',
			quantity:'100',
			description:'un producto cualquiera'
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
				`;

			if ( productArray.length > 0 )
			{
				for( let product of productArray )
				{
					innerHTML += 
					`<div class="product-card">
						<div class="product-img">
							<img src="Jack-Daniels.webp" alt="Jack Daniel's">
						</div>
						<div class="product-details">
							<span class="product-catagory">${product.category}</span>
							<h3 class="product-name">${product.name}</h3>
							<p class="product-description">${product.description}</p>
							<div class="product-bottom-details">
								<div class="product-price">${product.price}</div>
								<div class="product-quantity">
									<div>
										<input type="number" id="quantity" name="quantity" min="1" max="${product.quantity}">
									</div>
									<div class="product-cart">
										<button type="submit">Add to Cart</button>
									</div>
								</div> 
							</div>
						</div>    
					</div>`
				}
			}
			else
			{
				innerHTML += `<div class="no-products">
								<p class="no-products-text">No hay Productos</p>
							</div>`;
			};

			innerHTML += 
			`
			</div class="ButtonContainner">
				<div class="ButtonContainnerChild">
					<button id="${this.id}NewProductButton" class="newProduct">Nuevo Producto</button>
				</div>
				<div class="ButtonContainnerChild">
					<button id="${this.id}EditProductButton" class="newProduct">Edit Producto</button>	
				</div>
				<div class="ButtonContainnerChild">
					<button id="${this.id}DeleteProductButton" class="newProduct">Delete Producto</button>	
				</div>	
			</div>

			<div class= "newProductModalContainner" id='newProductModal'>
				<button id="${this.id}closeNewProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${createNewProductDataForm(this.productDefaultData)}
				<button id="${this.id}submitNewProductForm" type="submit">Crear</button>
				</div>
			</div>
			<div class= "editProductModalContainner" id='editProductModal'>
				<button id="${this.id}closeEditProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${editProductDataForm(this.productDefaultData)}
				<button id="${this.id}submitEditProductForm" type="submit">Edit</button>
				</div>
			</div>
			<div class= "deleteProductModalContainner" id='deleteProductModal'>
				<button id="${this.id}closeDeleteProductForm" class="closeModalButton">&times;</button>
				<div class='ModalForm'>
				${deleteProductDataForm()}
				<button id="${this.id}submitDeleteProductForm" type="submit">Delete</button>
				</div>
			</div>`;

			/***********************************     Event Listeners      ********************************************************/

			document.getElementById( this.id ).innerHTML = innerHTML;

			document.getElementById( this.id + 'NewProductButton').addEventListener('click', event => this.innerController.onNewProductButtonClick(event) );
			document.getElementById( this.id + 'EditProductButton').addEventListener('click', event => this.innerController.onEditProductButtonClick(event) );
			document.getElementById( this.id + 'DeleteProductButton').addEventListener('click', event => this.innerController.onDeleteProductButtonClick(event) );

			document.getElementById(this.id).addEventListener('click', event =>
			{
				if (event.target.classList.contains("editProduct")) this.innerController.onEditProductButtonClick(event);
				if (event.target.classList.contains("closeModalButton")) this.innerController.onCloseModalButtonClick(event);
			});

			document.getElementById( this.id + 'submitNewProductForm').addEventListener('click', event => this.innerController.onNewProductConfirmButtonClick(event) );
			document.getElementById( this.id + 'submitEditProductForm').addEventListener('click', event => this.innerController.onEditProductConfirmButtonClick(event) );
			document.getElementById( this.id + 'submitDeleteProductForm').addEventListener('click', event => this.innerController.onDeleteProductConfirmButtonClick(event) );
	
		});
	}

}

export { ProductView };
