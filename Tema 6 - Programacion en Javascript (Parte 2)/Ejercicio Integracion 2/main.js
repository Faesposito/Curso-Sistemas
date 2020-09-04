function getServerResponse() {

    //Creamos petición a un servidor Web
    let request = new XMLHttpRequest();

    request.open('GET', 'https://www.dolarsi.com/api/api.php?type=valoresprincipales');

    //Definir las respuestas para cuando el objeto notifique que ha terminado

    function onCompletedRequest(event) {
        if (event.currentTarget.status == 200) {

            let serverResponse = event.currentTarget.responseText;

            //Conversión de texto a Objeto (JSON->Object)
            let serverResponseObject = JSON.parse(serverResponse);

            createDolarBillboard(serverResponseObject);
        }
    }
    request.addEventListener('loadend', onCompletedRequest);
    request.send();
}

function createWrapper() {

    let wrapperHTML = `<div id="wrapper" class="wrapper"> </div>`;
    document.getElementById("app").insertAdjacentHTML("beforeend", wrapperHTML);
}

function createDolarBillboard(response) {


    let billboardHTML = `<div class="dolarBillboard">
                            <table class="gridContainer">
                                <thead>
                                    <td id="dolarType" class="tabbleHeader GridHeader"><img src="img/dollarbill.jpg" alt="">` + response[0].casa.nombre + `</td>
                                </thead>
                                <tr>
                                    <td class="tabbleSales GridSales1">Compra</td>
                                    <td class="tabbleSales GridSales2">Venta</td>
                                </tr>
                                <tr>
                                    <td id="Values1" class="tabbleValues GridValues1">$ ` + response[0].casa.compra + ` </td>
                                    <td class="tabbleValues GridValues2">$ ` + response[0].casa.venta + `</td>
                                </tr>
                                <tr>
                                    <td class="tabbleVariation GridVariation">
                                        <li>Variacion: ` + response[0].casa.variacion + ` </li>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tabbleFooter GridFooter">Actualizado: ` + Date().toString().slice(8, 25) + `</td>
                                </tr>
                            </table>
                        </div>`;

    if (document.getElementById("wrapper")) {
        document.getElementById("wrapper").insertAdjacentHTML("beforeend", billboardHTML);
    } else {
        createWrapper();
        createDolarBillboard(response);
    }
}

getServerResponse();