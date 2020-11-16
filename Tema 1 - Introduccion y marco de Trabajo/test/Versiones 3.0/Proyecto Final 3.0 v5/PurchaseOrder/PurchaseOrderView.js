/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

import { PurchaseOrderController } from "./PurchaseOrderController.js"

class PurchaseOrderView {

  constructor() {

    //this.innerController = new PurchaseOrderController(model, this);

    this.innerData = new Array();

    this.showPurchaseOrder();
  }

  addProducts(data) {

    this.innerData.push(data);
  }
  showPurchaseOrder() {

    let innerHTML = 
    `<div id= "PurchaseOrder" class="Containner">
      <div id="TabbleContainerID" class="TabbleContainer">
      <h1> Nombre de la Compania </h1>
      <h1> Direccion de la Compania</h1>
      <h1> Fecha de la Compra</h1>
      <h1> Usuario que Realizo la Compra</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
         `;

    //let productOrderArray = this.innerModel.getAll();
    
    let totalPrice = 0; 
    let iva = 0.24;
    let taxes = 0;

    if (this.innerData.length > 0) {

      for (let product of this.innerData) {

        innerHTML +=
          `<tr>
            <td><p id="productInCartName${this.innerData.indexOf(product)}">${product.name}</p></td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
          <tr>`;
        totalPrice += Number(product.price)*Number(product.quantity);
        productCounter++;
        iva = totalPrice * iva;
      }

    }
    innerHTML += `     
    </table>
        <div class="product-cart">
        <h3>SubTotal:   ${totalPrice} </h3>
        </br>
        </br>
        <h3>IVA:        ${iva}</h3>
        <h3>Impuestos:  ${taxes}</h3>
        </br>
        </br>
        <h1>Total:        ${totalPrice + iva}</h1>
        </div>
      </div>
    </div>`;
          
        
    document.getElementById('footer').innerHTML = innerHTML;

    console.log(this.innerData);
  }

}

export { PurchaseOrderView };