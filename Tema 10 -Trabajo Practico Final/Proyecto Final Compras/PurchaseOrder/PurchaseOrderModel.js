/*
	Example: UserModel Module // CRUD-Development
	Copyright (C) 2020 - Curso de Desarrollo de Sistemas 
	Autor: Matías Gastón Santiago
	https://educacion.batan.coop/course/view.php?id=9
*/

class PurchaseOrderModel extends EventTarget {


	constructor() {

		super();
		this.innerData = new Array();
		this.stockAvailable = new Array();
	};

	createPurchaseOrder() {


	}

	deletePurchaseOrder() {


	}

	getAll() {

		let message = {

			action:'getAll',
			body: null
		};

		return fetch( './PurchaseOrder/PurchaseOrderModel.php', { method:'POST', body:JSON.stringify(message) } );
	}
};


export { PurchaseOrderModel };