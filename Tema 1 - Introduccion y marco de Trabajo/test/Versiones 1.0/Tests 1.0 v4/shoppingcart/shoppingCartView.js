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

    console.log('se creo el cart');

    this.id = id;

    this.innerModel = model;

    this.innerController = new ShoppingCartController(model, this);

    this.update()
  }

  addProduct()
  {
    this.innerController.addProduct();
    
  }

  update() {
    let innerHTML = 
    `<div class="product-card">
      <div class="product-img">
        <img src="Jack-Daniels.webp" alt="Jack Daniel's">
      </div>
      <div class="product-details">
        <span class="product-catagory"></span>
        <h3 class="product-name"></h3>
        <p class="product-description"></p>
        <div class="product-bottom-details">
          <div class="product-price"></div>
          <div class="product-quantity">
            <div>
              <input type="number" id="quantity" name="quantity" min="1" max="">
            </div>
            <div class="product-cart">
              <button id="AddToCartButton" class="addToCart" type="submit">Add to Cart</button>
            </div>
          </div> 
        </div>
      </div>    
    </div>`;
    document.getElementById( this.id ).innerHTML = innerHTML;

    document.getElementById('Containner').addEventListener('click', event =>
			{
				if ( event.target.hasAttribute('addToCart') )
					this.innerController.onAddToCartButtonClick(event);
			});
  }

}

export {
  ShoppingCartView
};