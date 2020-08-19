//Mi primer programa en JavaScript

let tabla = [{
    lacteo: "Leche",
    porcion: "200cc",
    contenido_calcio: 280,
  },
  {
    lacteo: "Yogurt Bebible",
    porcion: "200cc",
    contenido_calcio: 180,
  },
  {
    lacteo: "Yogurt Firme",
    porcion: "190g",
    contenido_calcio: 203,
  },
  {
    lacteo: "Postre",
    porcion: "125g",
    contenido_calcio: 143,
  },
  {
    lacteo: "Queso Rallado",
    porcion: "8g",
    contenido_calcio: 104,
  },
];

function identificarLacteoDeMayorContenidoDeCalcio(tabla_de_datos) {
  respuesta = tabla_de_datos[0];

  //Lectura de este código: "Para cada lacteo de la tabla_de_datos... "
  for (lacteo of tabla_de_datos) {
    //Si el contenido de calcio del lacteo es mayor (>) que el contenido de calcio de la respuesta que tengo hasta este momento...
    if (lacteo.contenido_calcio > respuesta.contenido_calcio) {
      //Entonces mi respuesta se actualiza
      respuesta = lacteo;
    }

    //... luego vuelve a realizarse la operación para el siguiente lacteo del array sucesivamente hasta llegar al último.
  }

  return respuesta;
}

console.log(identificarLacteoDeMayorContenidoDeCalcio(tabla).lacteo);