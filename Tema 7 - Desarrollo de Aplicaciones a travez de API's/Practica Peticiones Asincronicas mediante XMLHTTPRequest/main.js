function getServerResponse() {
  //Creamos petición a un servidor Web
  let request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );

  //Definir las respuestas para cuando el objeto notifique que ha terminado

  function onCompletedRequest(event) {
    if (event.currentTarget.status == 200) {
      let serverResponse = event.currentTarget.responseText;

      //Conversión de texto a Objeto (JSON->Object)
      let serverResponseObject = JSON.parse(serverResponse);

      createDolarBillboard(serverResponseObject);
    }
  }
  request.addEventListener("loadend", onCompletedRequest);
  request.send();
}

function createWrapper() {
  let wrapperHTML = `<div id="wrapper" class="wrapper"> </div>`;
  document.getElementById("app").insertAdjacentHTML("beforeend", wrapperHTML);
}

function createDolarBillboard(response) {
  function checkVariation(response, billType) {
    if (response[billType].casa.variacion != null) {
      return response[billType].casa.variacion;
    } else {
      return "No Admite";
    }
  }

  function newBillboard() {
    for (let index = 0; index <= response.length; index++) {
      let billboardHTML =
        `<div id="dolarBillboard` +
        index.toString() +
        `" class="dolarBillboard">
                                <table class="gridContainer">
                                    <thead>
                                        <td id="dolarType" class="tabbleHeader GridHeader"><img src="img/dollarbill.jpg" alt="">` +
        response[index].casa.nombre +
        `</td>
                                    </thead>
                                    <tr>
                                        <td class="tabbleSales GridSales1">Compra</td>
                                        <td class="tabbleSales GridSales2">Venta</td>
                                    </tr>
                                    <tr>
                                        <td id="Values1" class="tabbleValues GridValues1">$ ` +
        response[index].casa.compra +
        ` </td>
                                        <td class="tabbleValues GridValues2">$ ` +
        response[index].casa.venta +
        `</td>
                                    </tr>
                                    <tr>
                                        <td class="tabbleVariation GridVariation">
                                            <li>Variacion: ` +
        checkVariation(response, index) +
        ` </li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tabbleFooter GridFooter">Actualizado: ` +
        Date().toString().slice(8, 25) +
        `</td>
                                    </tr>
                                </table>
                            </div>`;
      document
        .getElementById("wrapper")
        .insertAdjacentHTML("beforeend", billboardHTML);
    }
  }

  function updateBillboard() {
    for (let index = 0; index <= response.length; index++) {
      let billboardHTML =
        `<table class="gridContainer">
                                    <thead>
                                        <td id="dolarType" class="tabbleHeader GridHeader"><img src="img/dollarbill.jpg" alt="">` +
        response[index].casa.nombre +
        `</td>
                                    </thead>
                                    <tr>
                                        <td class="tabbleSales GridSales1">Compra</td>
                                        <td class="tabbleSales GridSales2">Venta</td>
                                    </tr>
                                    <tr>
                                        <td id="Values1" class="tabbleValues GridValues1">$ ` +
        response[index].casa.compra +
        ` </td>
                                        <td class="tabbleValues GridValues2">$ ` +
        response[index].casa.venta +
        `</td>
                                    </tr>
                                    <tr>
                                        <td class="tabbleVariation GridVariation">
                                            <li>Variacion: ` +
        checkVariation(response, index) +
        ` </li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tabbleFooter GridFooter">Actualizado: ` +
        Date().toString().slice(8, 25) +
        `</td>
                                    </tr>
                                </table>`;
      document.getElementById(
        "dolarBillboard" + index.toString()
      ).innerHTML = billboardHTML;
    }
  }

  function fillBillboard() {
    if (document.getElementById("dolarBillboard0")) {
      updateBillboard();
    } else if (document.getElementById("wrapper")) {
      document
        .getElementById("wrapper")
        .insertAdjacentHTML("beforeend", newBillboard());
    } else {
      createWrapper();
      createDolarBillboard(response);
    }
  }

  fillBillboard();
}

function onUpdateButtonClick() {
  getServerResponse();
}

function createUpdateButton() {
  getServerResponse();
  let updateButton = document.createElement("button"); //--<button>Actualizar Cotización</button>
  updateButton.innerHTML = "Actualizar Cotización";
  document.getElementById("app").appendChild(updateButton);
  updateButton.addEventListener("click", onUpdateButtonClick);
}

createUpdateButton();
