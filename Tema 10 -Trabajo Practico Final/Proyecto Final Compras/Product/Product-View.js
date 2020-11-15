/*
    Autor: Matías Gastón Santiago
    Copyright (C) 2020 - Curso de Desarrollo de Sistemas
    https://educacion.batan.coop/course/view.php?id=9

*/

import { ProductController } from "./Product-Controller.js"

/**************************** Product Modal Forms ****************************/
function createNewProductDataForm(defaultValues )
{
    let innerHTML =
    `<form id="newProductForm" name="newProductForm">
        <h1>Create New Product</h1>
        <input type="text" name="name" placeholder='Name: Nombre del Producto' value="${defaultValues.name}"/>
        <input type="text" name="category" placeholder='Category: Tipo del Producto' value="${defaultValues.category}" />
        <input type="text" name="price" placeholder='Price: Precio del Producto' value="${defaultValues.price}" />
        <input type="text" name="quantity" placeholder='Quantity: Cantidad a Ingresar' value="${defaultValues.quantity}" />
        <input type="text" name="description" placeholder='Description: Cantidad a Ingresar' value="${defaultValues.description}" />
    </form>
    <form id="newProductImageForm" enctype="multipart/form-data" method="POST">
        <input type="text" name="name" placeholder='Image Name: Ingresa el mismo nombre del Producto' value="${defaultValues.name}"/>
        <input type="file" name="image">
    </form>
    `;
    return innerHTML;
}
function editProductDataForm(defaultValues)
{
    let innerHTML =
    `<form id="editProductForm" name="editProductForm">
        <h1>Edit Product</h1>
        <input type="text" name="productToEditName" placeholder='Nombre del Producto a Editar' value="${defaultValues.name}"/>
        <input type="text" name="name" placeholder='Name: Nombre del Producto' value="${defaultValues.name}"/>
        <input type="text" name="category" placeholder='Category: Tipo del Producto' value="${defaultValues.category}" />
        <input type="text" name="price" placeholder='Price: Precio del Producto' value="${defaultValues.price}" />
        <input type="text" name="quantity" placeholder='Quantity: Cantidad a Ingresar' value="${defaultValues.quantity}" />
        <input type="text" name="description" placeholder='Description: Cantidad a Ingresar' value="${defaultValues.description}" />
    </form>
    <form id="editProductImageForm" enctype="multipart/form-data" method="POST">
        <input type="text" name="name" placeholder='Image Name: Ingresa el mismo nombre del Producto' value="${defaultValues.name}"/>
        <input type="file" name="image">
    </form>
    `;
    return innerHTML;
}
function deleteProductDataForm()
{
    let innerHTML =
    `<form id="deleteProductForm" name="deleteProductForm">
        <h1>Delete Product</h1>
        <input type="text" name="productToDeleteName" placeholder='Nombre del Producto a Eliminar' value=""/>
    </form>
    `;
    return innerHTML;
}
/*****************************************************************************/

class ProductView {

    constructor( id, model, isAdmin ) {

        this.id = id;
        this.innerModel = model;

        this.innerController = new ProductController(model, this);

        this.update();

        this.isAdmin = isAdmin;

        this.productDefaultData = {

            name:'Jack Daniels',
            category:"Whisky",
            price:'100',
            quantity:'100',
            description:'un Whisky de los mejores que hay.'
        };
    }
/**************************** Product Modal Controls ****************************/
    openProductModal(data) {

        if (data === 'newProductModal') {

            document.getElementById('newProductModal').style.display='block';
        }
        if (data === 'editProductModal') {

            document.getElementById('editProductModal').style.display='block';
        }
        if (data === 'deleteProductModal') {

            document.getElementById('deleteProductModal').style.display='block';
        }

        document.getElementById("Containner").style.display = "none";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }

    closeProductModal() {

        document.getElementById("Containner").style.display = "block";
        document.getElementById('newProductModal').style.display='none';
        document.getElementById('editProductModal').style.display='none';
        document.getElementById('deleteProductModal').style.display='none';
        document.body.style.backgroundColor = "white";
    }
/********************************************************************************/

/**************************** Product Update Methods ****************************/
    update() {

        this.innerModel.getAll().then( response => this.updateAll(response.json()) );
    }

    updateAll( productPromise) {

        productPromise.then( productArray => {

            let innerHTML =
            `<h1> Products </h1>
            <div id= "Containner" class="Containner">`;

            if ( productArray.length > 0 ) {

                for( let product of productArray ) {

                    innerHTML +=
                    `<div id="product-container${productArray.indexOf(product)}">
                        <div id="product-card${productArray.indexOf(product)}" class="product-card">
                            <div class="product-img">
                                <img src="./Product/resource/${product.name}.jpg" alt="Jack Daniel's">
                            </div>
                            <div class="product-details">
                                <span id="product-category${productArray.indexOf(product)}" class="product-category">${product.category}</span>
                                <p id="product-id${productArray.indexOf(product)}" class="product-id">${product.id}</p>
                                <h3 id="product-name${productArray.indexOf(product)}" class="product-name">${product.name}</h3>
                                <p id="product-description${productArray.indexOf(product)}" class="product-description">${product.description}</p>
                                <div class="product-bottom-details">
                                    <div id="product-price${productArray.indexOf(product)}" class="product-price">${product.price}</div>
                                    <div class="product-quantity">
                                        <div id="product-quantity-div${productArray.indexOf(product)}">
                                            <input type="number" id="product-quantity${productArray.indexOf(product)}" name="quantity" min="0" max="${product.quantity}" value="1">
                                        </div>`;

                                        if(product.quantity <= '0') {

                                            innerHTML += `
                                            <div id="product-cart${productArray.indexOf(product)}" class="product-cart">
                                                <button id="AddToCartButton${productArray.indexOf(product)}" class="addToCart" type="submit" disabled>Out of Stock</button>
                                            </div>`;
                                        }
                                        else {
                                            innerHTML +=
                                            `<div id="product-cart${productArray.indexOf(product)}" class="product-cart">
                                                <button id="AddToCartButton${productArray.indexOf(product)}" class="addToCart" type="submit">Add to Cart</button>
                                            </div>`;
                                    }
                    innerHTML +=`
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                }
            }
            else {

                innerHTML += `<div class="no-products">
                                <p class="no-products-text">No hay Productos</p>
                            </div>`;
            };

            if (this.isAdmin) {

            innerHTML +=
            `
            </div class="ButtonContainner">
                <button id="${this.id}NewProductButton" class="newProduct">Nuevo Producto</button>
            </div>
            </div class="ButtonContainner">
                <button id="${this.id}EditProductButton" class="editProduct">Edit Producto</button>
            </div>
            </div class="ButtonContainner">
                <button id="${this.id}DeleteProductButton" class="deleteProduct">Delete Producto</button>
            </div>

            <div class= "newProductModalContainner" id='newProductModal'>
                <button class="closeModalButton">&times;</button>
                <div class='ModalForm'>
                ${createNewProductDataForm(this.productDefaultData)}
                <button id="${this.id}submitNewProductForm" type="submit">Crear</button>
                </div>
            </div>
            <div class= "editProductModalContainner" id='editProductModal'>
                <button class="closeModalButton">&times;</button>
                <div class='ModalForm'>
                ${editProductDataForm(this.productDefaultData)}
                <button id="${this.id}submitEditProductForm" type="submit">Edit</button>
                </div>
            </div>
            <div class= "deleteProductModalContainner" id='deleteProductModal'>
                <button class="closeModalButton">&times;</button>
                <div class='ModalForm'>
                ${deleteProductDataForm()}
                <button id="${this.id}submitDeleteProductForm" type="submit">Delete</button>
                </div>
            </div>`;
            }
            /***********************************     Event Listeners      ********************************************************/

            document.getElementById( this.id ).innerHTML = innerHTML;

            document.getElementById(this.id).addEventListener('click', event => {

                if (event.target.classList.contains("addToCart")) this.innerController.onAddToCartClick(event);     
            });

            document.getElementById('sidebar').addEventListener('click', event => {

                if (event.target.classList.contains("deleteProductFromCart")) this.innerController.onDeleteFromCartClick(event);     
            });

            if (this.isAdmin) {

            document.getElementById( this.id + 'NewProductButton').addEventListener('click', event => this.innerController.onNewProductButtonClick(event) );
            document.getElementById( this.id + 'EditProductButton').addEventListener('click', event => this.innerController.onEditProductButtonClick(event) );
            document.getElementById( this.id + 'DeleteProductButton').addEventListener('click', event => this.innerController.onDeleteProductButtonClick(event) );

            document.getElementById(this.id).addEventListener('click', event => {

                if (event.target.classList.contains("closeModalButton")) this.innerController.oncloseProductModalButtonClick(event);    
            });

            document.getElementById( this.id + 'submitNewProductForm').addEventListener('click', event => this.innerController.onNewProductConfirmButtonClick(event) );
            document.getElementById( this.id + 'submitEditProductForm').addEventListener('click', event => this.innerController.onEditProductConfirmButtonClick(event) );
            document.getElementById( this.id + 'submitDeleteProductForm').addEventListener('click', event => this.innerController.onDeleteProductConfirmButtonClick(event) );
            }
            /**********************************************************************************************************************/
        });
    }
/********************************************************************************/
}

export { ProductView };
