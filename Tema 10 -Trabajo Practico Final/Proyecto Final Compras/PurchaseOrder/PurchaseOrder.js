/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class PurchaseOrder extends EventTarget {

  constructor() {

    super();
    this.innerData = new Array();
  }

  addOrderToDataBase(data) {

    let message = {

			action:'purchaseOrder',
			body: data
		};

    return fetch( './Product/Product-RemoteModel.php', { method:'POST', body:JSON.stringify(message) } );
    
  }

  generatePurchaseOrder(productData) {   

		for (let product of productData) {

     this.innerData.push(product);
    }
    
    this.addOrderToDataBase(this.innerData);
    this.showPurchaseOrder();
  }
 
  showPurchaseOrder() {

    let innerHTML = 
    `<div id="PurchaseOrder" class="">
      <div id="" class="">
      <h5> Nombre de la Compania </h5>
      <h5> Direccion de la Compania</h5>
      <h5> Fecha de la Compra</h5>
      <h5> Usuario que Realizo la Compra</h5>
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
         `;

    let productOrderArray = this.innerData;
    
    let totalPrice = 0; 
    let iva = 0.24;
    let taxes = 0;

    if (productOrderArray.length > 0) {

      for (let product of productOrderArray) {

        innerHTML +=
          `<tr>
            <td><p id="productInCartName${productOrderArray.indexOf(product)}">${product.name}</p></td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
          <tr>`;
        totalPrice += Number(product.price)*Number(product.quantity);
      }
    }
    innerHTML += `     
    </table>
        <div class="">
        <h3>SubTotal:   ${totalPrice} </h3>
        </br>
        </br>
        <h3>IVA:        ${iva = totalPrice * iva}</h3>
        <h3>Impuestos:  ${taxes}</h3>
        </br>
        </br>
        <h1>Total:        ${totalPrice + iva}</h1>
        </div>
      </div>
    </div>`;
                
    document.getElementById('footer').innerHTML = innerHTML;
  }

}

export { PurchaseOrder };