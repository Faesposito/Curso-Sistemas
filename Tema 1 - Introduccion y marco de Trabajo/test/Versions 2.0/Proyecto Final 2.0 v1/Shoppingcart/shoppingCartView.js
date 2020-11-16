/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

import {
  ShoppingCartController
} from "./shoppingCartController.js"

class ShoppingCartView {

  constructor(id, model) {

    this.id = id
    this.innerModel = model;

    this.innerController = new ShoppingCartController(model, this);

    this.showCart();
  }

  showCart() {

    let innerHTML = 
    `<div id= "ShoppingCart" class="Containner">
      <div id="TabbleContainerID" class="TabbleContainer">
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Acciones</th>
          </tr>
         `;

    let cartArray = this.innerModel.getAll();
    let totalPrice = 0;
    if (cartArray.length > 0) {

      for (let product of cartArray) {

        innerHTML +=
          `<tr>
            <td><p id="productInCartName${cartArray.indexOf(product)}">${product.name}</p></td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>${product.description}</td>
            <td>
                <button id="deleteProductFromCart${cartArray.indexOf(product)}" class="deleteProductFromCart" >Eliminar</button>
            </td>
          <tr>`;
        totalPrice += Number(product.price)*Number(product.quantity);
      }

    } else {
      innerHTML += `<tr>
                <td colspan="5">No hay productos en el Carrito</td>
              </tr>`;
    }

    innerHTML += `     
    </table>
        <div class="product-cart">
        <h1>${totalPrice} </h1>
        <button id="buyButton" class="buyButton" type="submit">Comprar</button>
        </div>
      </div>
    </div>`;
          
        
    document.getElementById('sidebar').innerHTML = innerHTML;

    document.getElementById('buyButton').addEventListener('click', event => this.innerController.onBuyProductButtonClick(event) );
    
     document.getElementById('ShoppingCart').addEventListener('click', event =>
			{
				if ( event.target.classList.contains('deleteProductFromCart') )
					this.innerController.onDeleteFromCartButtonClick(event);
			}); 
  }

}

export {
  ShoppingCartView
};