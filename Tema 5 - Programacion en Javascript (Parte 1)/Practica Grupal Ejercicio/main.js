//Ejercicio Grupal

let stock = {

  lacteos: [{
      marca: "Serenisima",
      nombre: "Leche",
      precio: 60,
      contenido: 1000,
      fechaVencimiento: "1/9/20"
    },
    {
      marca: "Sancor",
      nombre: "Leche",
      precio: 65,
      contenido: 1000,
      fechaVencimiento: "3/9/20"
    },
    {
      marca: "Ser",
      nombre: "Yogurt",
      precio: 100,
      contenido: 1000,
      fechaVencimiento: "10/9/20"
    },
    {
      marca: "Serenito",
      nombre: "Yogurt",
      precio: 70,
      contenido: 200,
      fechaVencimiento: "1/10/20"
    },
  ],
  bebidas: [{
      marca: "Jack Daniels",
      nombre: "Whisky",
      precio: 800,
      contenido: 900,
      fechaVencimiento: "10/5/25"
    },
    {
      marca: "Fernet Branca",
      nombre: "Fernet",
      precio: 400,
      contenido: 750,
      fechaVencimiento: "3/9/24"
    },
    {
      marca: "Villavicencio",
      nombre: "Agua",
      precio: 65,
      contenido: 1000,
      fechaVencimiento: "10/10/20"
    },
    {
      marca: "Coca-Cola",
      nombre: "Gaseosa",
      precio: 90,
      contenido: 1500,
      fechaVencimiento: "1/1/21"
    },
  ],
  fiambres: [{
      marca: "Canoli",
      nombre: "Jamon",
      precio: 100,
      contenido: 100,
      fechaVencimiento: "10/10/20"
    },
    {
      marca: "Canoli",
      nombre: "Salamin",
      precio: 200,
      contenido: 120,
      fechaVencimiento: "3/9/22"
    },
    {
      marca: "Cabaña Argentina",
      nombre: "Jamon Crudo",
      precio: 800,
      contenido: 1000,
      fechaVencimiento: "10/10/21"
    },
    {
      marca: "Canoli",
      nombre: "Mortadela",
      precio: 70,
      contenido: 100,
      fechaVencimiento: "1/10/20"
    },
  ],
  panaderia: [{
      marca: "Las Vegas",
      nombre: "Sandwich de Miga",
      precio: 600,
      contenido: 12,
      fechaVencimiento: "1/9/20"
    },
    {
      marca: "Las Vegas",
      nombre: "Pan",
      precio: 100,
      contenido: 1000,
      fechaVencimiento: "25/8/20"
    },
    {
      marca: "Dulces Tentaciones",
      nombre: "Pan",
      precio: 80,
      contenido: 1000,
      fechaVencimiento: "25/8/20"
    },
    {
      marca: "La Primera",
      nombre: "Facturas",
      precio: 160,
      contenido: 12,
      fechaVencimiento: "30/8/20"
    },
  ],
  limpieza: [{
      marca: "Procenex",
      nombre: "Desodorante de Piso",
      precio: 200,
      contenido: 1000,
      fechaVencimiento: "10/10/25"
    },
    {
      marca: "Cif",
      nombre: "Detergente",
      precio: 200,
      contenido: 500,
      fechaVencimiento: "3/9/22"
    },
    {
      marca: "Ala",
      nombre: "Jabon en Polvo",
      precio: 300,
      contenido: 600,
      fechaVencimiento: "10/10/22"
    },
    {
      marca: "Plusbelle",
      nombre: "Shampoo",
      precio: 100,
      contenido: 1000,
      fechaVencimiento: "1/10/30"
    },
  ],
};


function lacteosAumentosDePrecios(stock_Product) {

  for (index = 0; index < stock_Product.lacteos.length; index++) {

    if (stock_Product.lacteos[index].nombre == "Leche") {
      stock_Product.lacteos[index].precio += 2.30;
    } else if (stock_Product.lacteos[index].nombre == "Yogurt" && stock_Product.lacteos[index].contenido >= 500) {
      stock_Product.lacteos[index].precio -= 1.25;
    }
    stock_Product.lacteos[index].precio += stock_Product.lacteos[index].precio * 0.15;
    console.log(stock_Product.lacteos[index].precio);
  }
}

function bebidasAumentosDePrecios(stock_Product) {

  for (index = 0; index < stock_Product.bebidas.length; index++) {

    if (stock_Product.bebidas[index].contenido >= 250 || stock_Product.bebidas[index].contenido <= 500) {
      stock_Product.bebidas[index].precio += 1.34;
    } else if (stock_Product.bebidas[index].marca == "Jack Daniels" && stock_Product.bebidas[index].contenido >= 750) {
      stock_Product.bebidas[index].precio += 25;
    }
    stock_Product.bebidas[index].precio += stock_Product.bebidas[index].precio * 0.34;
    console.log(stock_Product.bebidas[index].precio);
  }
}

function fiambresAumentosDePrecios(stock_Product) {

  for (index = 0; index < stock_Product.fiambres.length; index++) {
    stock_Product.fiambres[index].precio += stock_Product.fiambres[index].precio * 0.317;
    console.log(stock_Product.fiambres[index].precio);
  }
}

function panaderiaAumentosDePrecios(stock_Product) {

  for (index = 0; index < stock_Product.bebidas.length; index++) {

    stock_Product.bebidas[index].precio += stock_Product.bebidas[index].precio * 0.27;
    console.log(stock_Product.bebidas[index].precio);
  }
}

function limpiezaAumentosDePrecios(stock_Product) {

  for (index = 0; index < stock_Product.bebidas.length; index++) {

    stock_Product.bebidas[index].precio += stock_Product.bebidas[index].precio * 0.225;
    console.log(stock_Product.bebidas[index].precio);
  }
}


lacteosAumentosDePrecios(stock);
bebidasAumentosDePrecios(stock);
fiambresAumentosDePrecios(stock);
panaderiaAumentosDePrecios(stock);
limpiezaAumentosDePrecios(stock);