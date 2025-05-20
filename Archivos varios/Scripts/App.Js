 /*empezamos a tirar codigo,, vamos a hacer una estruct Jason pero de nuestros prod
 denntro de este fomato JASON vamos a ver un arreglo , y dentro de ese arreglo los objetos osea los productos*/

const products = [
  {
    id: 1,
    nombre: "Impresora1",
    modelo: "Brother MFC-L5900DW",
    color: "Negro",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCtcTWWsVZur7UZ9QFRYoWbohZps3ZkUrLw&s",
    precio: 34000,
    disponible: true,
    enlace: "impresora1.html"
  },
  {
    id: 2,
    nombre: "impresora2",
    modelo: "HP LaserJet S/F Pro M12w",
    img :"https://images.fravega.com/f1000/2ba3460542959e228ee238602f4b06f4.jpg",
    color: "Blanco",
    precio: 140000,
    disponible: false,
    enlace: "impresora2.html"
  },
 
  {
    id: 3,
    nombre: "impresora3",
    modelo: "HP LaserJet S/F Pro P1102w",
    color: "Gris",
    img: "https://silex.com.ar/wp-content/uploads/2022/03/Impresora-HP-1102w.jpg",
    precio: 9900,
    disponible: true,
    enlace: "impresora.html"
  }
];
/*terminamos de definir las 24 varialbes de las impresoras...


/*Luego creamos las tarjetas por codigo y los insertamos en el Dom, vamos a traernos la etiqueta PADRE 
ACCEDEMOS MEDIANTE query Selector que es un metodo para ACCEDER A  X etiqueta*/


const grid = document.querySelector('.listadoImpresoras'); /*elemento padre donde estan todas mis impresoras / productos */


/*hago una func que me cree la tarjeta*/

function createProductCard(products) { /*forma clasica de crear una func*/

/* vamos a crear una funcion que CREA una tarjeta, ya vimos el metodo para acceder, ahora usamos el metodo para CREAR*/






}


(products) => { /*formato moderno que nos permite hacer func anonimas*/


}
































/*filtro de impresoras
document.addEventListener("DOMContentLoaded", () => {
  const inputBusqueda = document.getElementById("busqueda");
  const tarjetas = document.querySelectorAll(".listadoImpresoras > div");

  inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();

    tarjetas.forEach(tarjeta => {
      const nombreProducto = tarjeta.querySelector("p").textContent.toLowerCase();

      if (nombreProducto.includes(texto)) {
        tarjeta.style.display = "block";
      } else {
        tarjeta.style.display = "none";
      }
    });
  });
});
*/