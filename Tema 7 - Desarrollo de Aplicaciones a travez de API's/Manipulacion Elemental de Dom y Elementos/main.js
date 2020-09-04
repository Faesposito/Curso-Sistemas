function createCalculator() {

  let calculatorHTML =
    `<table class="myTable">
      <tr class="input">
          <td colspan="4">
              <input id="display" class="display" type="text" placeholder="0" size="20%">
          </td>
      </tr>
      <tr>
          <td>
              <button id="button-7" class="blue-button buttonProperties">7</button>
          </td>
          <td>
              <button id="button-8" class="blue-button buttonProperties">8</button>
          </td>
          <td>
              <button id="button-9" class="blue-button buttonProperties">9</button>
          </td>
          <td>
              <button id="button-plus" class="green-button buttonProperties">+</button>
          </td>
      </tr>
      <tr>
          <td>
              <button id="button-4" class="blue-button buttonProperties">4</button>
          </td>
          <td>
              <button id="button-5" class="blue-button buttonProperties">5</button>
          </td>
          <td>
              <button id="button-6" class="blue-button buttonProperties">6</button>
          </td>
          <td>
              <button id="button-minus" class="green-button buttonProperties">-</button>
          </td>
      </tr>
      <tr>
          <td>
              <button id="button-1" class="blue-button buttonProperties">1</button>
          </td>
          <td>
              <button id="button-2" class="blue-button buttonProperties">2</button>
          </td>
          <td>
              <button id="button-3" class="blue-button buttonProperties">3</button>
          </td>
          <td>
              <button id="button-multiply" class="green-button buttonProperties">*</button>
          </td>
      </tr>
      <tr>
          <td>
              <button id="button-0" class="blue-button buttonProperties">0</button>
          </td>
          <td>
              <button id="button-point" class="blue-button buttonProperties">.</button>
          </td>
          <td>
              <button id="button-equal" class="yellow-button buttonProperties">=</button>
          </td>
          <td>
              <button id="button-divide" class="green-button buttonProperties">/</button>
          </td>
      </tr>
      <tr>
          <td colspan="4">
              <button id="button-delete" class="red-button buttonProperties">Borrar</button>
          </td>
      </tr>
  </table>`;

  return calculatorHTML;

}

function onButtonClick1() {

  document.getElementById("display").value = document.getElementById("display").value + 1;

}

function onButtonClick2() {

  document.getElementById("display").value = document.getElementById("display").value + 2;

}

function onButtonClick3() {

  document.getElementById("display").value = document.getElementById("display").value + 3;

}

function onButtonClick4() {

  document.getElementById("display").value = document.getElementById("display").value + 4;

}

function onButtonClick5() {

  document.getElementById("display").value = document.getElementById("display").value + 5;

}

function onButtonClick6() {

  document.getElementById("display").value = document.getElementById("display").value + 6;

}

function onButtonClick7() {

  document.getElementById("display").value = document.getElementById("display").value + 7;

}

function onButtonClick8() {

  document.getElementById("display").value = document.getElementById("display").value + 8;

}

function onButtonClick9() {

  document.getElementById("display").value = document.getElementById("display").value + 9;

}

function onButtonClick0() {

  document.getElementById("display").value = document.getElementById("display").value + 0;

}


function onButtonClickplus() {

}

//Create Calculator

document.getElementById("app").innerHTML = createCalculator();

//Numeric Pad
document.getElementById("button-1").addEventListener('click', onButtonClick1);
document.getElementById("button-2").addEventListener('click', onButtonClick2);
document.getElementById("button-3").addEventListener('click', onButtonClick3);
document.getElementById("button-4").addEventListener('click', onButtonClick4);
document.getElementById("button-5").addEventListener('click', onButtonClick5);
document.getElementById("button-6").addEventListener('click', onButtonClick6);
document.getElementById("button-7").addEventListener('click', onButtonClick7);
document.getElementById("button-8").addEventListener('click', onButtonClick8);
document.getElementById("button-9").addEventListener('click', onButtonClick9);
document.getElementById("button-0").addEventListener('click', onButtonClick0);

//Operators
document.getElementById("button-plus").addEventListener('click', onButtonClickplus);
document.getElementById("button-minus").addEventListener('click', onButtonClickminus);
document.getElementById("button-multiply").addEventListener('click', onButtonClickmultiply);
document.getElementById("button-divide").addEventListener('click', onButtonClickdivide);
document.getElementById("button-point").addEventListener('click', onButtonClickpoint);

//Others
document.getElementById("button-equal").addEventListener('click', onButtonClickequal);
document.getElementById("button-delete").addEventListener('click', onButtonClickdelete);