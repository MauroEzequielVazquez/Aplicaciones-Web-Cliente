
// Datos necesarios para la conexión con Airtable
const API_TOKEN = 'patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1';
const BASE_ID = 'appy5Akrxlk1wQUzj'; //
const TABLE_NAME = 'tabla'; // 
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;


// Lista de productos

/*const products = [        //LISTA DE PROD HARDCODEADOS



  {   // en los prod, PONEMOS LOS MISMOS DATOS QUE TENEMOS EN html
    name: "Brother M/F MFC-L5900DW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCtcTWWsVZur7UZ9QFRYoWbohZps3ZkUrLw&s",
    alt: "Brother MFC-L5900DW",
    link: "../impresoras/impresora1.html",
    price: 340000,
    deliveryfree :true,
    oferta :true,
  },
  {
    name: "HP LaserJet S/F Pro M12w",
    img: "https://images.fravega.com/f1000/2ba3460542959e228ee238602f4b06f4.jpg",
    alt: "HP LaserJet Pro M12w",
    link: "../impresoras/impresora2.html",
    price: 135000,
    deliveryfree :true,
    oferta :false,
  },
  {
    name: "HP LaserJet S/F Pro P1102w",
    img: "https://silex.com.ar/wp-content/uploads/2022/03/Impresora-HP-1102w.jpg",
    alt: "HP LaserJet Pro P1102w",
    link: "../impresoras/impresora3.html",
    price: 140000,
      deliveryfree :true,
    oferta :false,
  },
  {
    name: "Xerox M/F B235 Multifunción",
    img: "https://intermaco.com.ar/productos/B235V_DNI.jpg",
    alt: "Xerox B235",
    link: "../impresoras/impresora4.html",
    price: 340000,
      deliveryfree :true,
    oferta :false,
    
  },
  {
    name: "Lexmark M/F MX812DFE",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YXnyNmGlcEu0KIq3JqRjksq2xoiL5Uv7HQ&s",
    alt: "Lexmark MX812DFE",
    link: "../impresoras/impresora5.html",
    price: 460000,
     deliveryfree :false,
    oferta :true,
  },
  {
    name: "HP LaserJet S/F Pro P1006",
    img: "https://img.drz.lazcdn.com/static/pk/p/dfa66d9eba0fd6b63394dda2185aacc4.jpg_720x720q80.jpg",
    alt: "HP LaserJet Pro P1006",
    link: "../impresoras/impresora6.html",
    price: 1100000,
    deliveryfree :false,
    oferta :true,
    
  },
  {
    name: "Brother M/F DCP 8080DN",
    img: "https://http2.mlstatic.com/D_NQ_NP_705358-MLA32285211836_092019-O.webp",
    alt: "Brother DCP 8080DN",
    link: "../impresoras/impresora7.html",
    price: 180000,
   deliveryfree :false,
    oferta :true,
  },
  {
    name: "Brother S/F 1212w",
    img: "https://images.fravega.com/f300/2f590ca0527ae3e804410a6a82de0c55.jpg.webp",
    alt: "Brother 1212w",
    link: "../impresoras/impresora8.html",
    price: 120000,
    deliveryfree :true,
    oferta :false,
  },
  {
    name: "Oki S/F C562DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmQM9vAwQCVpkQPbsL5HkUkgfosF20qfs1g&s",
    alt: "Oki C562DN",
    link: "../impresoras/impresora9.html",
        price: 100000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Ricoh M/F 3710SF",
    img: "https://http2.mlstatic.com/D_NQ_NP_985776-MLA45754281308_042021-O.webp",
    alt: "Ricoh 3710SF",
    link: "../impresoras/impresora10.html",
        price: 100000,
          deliveryfree :false,
    oferta :true,
  },
  {
    name: "Samsung S/F Xpress SL-2020W",
    img: "https://http2.mlstatic.com/D_NQ_NP_21999-MLA20221973444_012015-O.webp",
    alt: "Samsung Xpress SL-2020W",
    link: "../impresoras/impresora11.html",
        price: 100000,
          deliveryfree :true,
    oferta :true,
  },
  {
    name: "Samsung M/F Xpress SL-M2070W",
    img: "https://datacop.com.ar/images/stories/datacop/multifuncion-samsung-xpress-sl-m2070w-wi-fi.jpg",
    alt: "Samsung Multifunción Xpress SL-M2070W",
    link: "../impresoras/impresora12.html",
        price: 185000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Minolta M/F SBizHub C251",
    img: "https://d1nz2cwxocqem8.cloudfront.net/image/380230487157/image_dar042ot512d503hv8mf55h45s/-FWEBP,Q75,-S3840",
    alt: "Impresora Multifunción BizHub C251",
    link: "../impresoras/impresora13.html",
    price: 750000,
    deliveryfree :false,
    oferta :true,
  },
  {
    name: "Brother S/F HL-1200",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9R24hWBJHBfLkLZapV6-wfjxCkUEAT-oVJg&s",
    alt: "Brother HL-1200",
    link: "../impresoras/impresora14.html",
        price: 100000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "HP S/F Laserjet 107W",
    img: "https://my-media.apjonlinecdn.com/catalog/product/4/Z/4ZB78A-1_T1678955593.png",
    alt: "HP Laserjet 107W",
    link: "../impresoras/impresora15.html",
        price: 140000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Brother M/F DCP 7065DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bbxkCskUGtdG99LllCTDnEdB3SLKGVuJ8g&s",
    alt: "Brother M/F DCP 7065DN",
    link: "../impresoras/impresora16.html",
        price: 170000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Xerox S/F 3020",
    img: "https://images.fravega.com/f1000/86818c9c27df7404060e689606d19211.jpg",
    alt: "Xerox 3020",
    link: "../impresoras/impresora17.html",
        price: 120000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Ricoh S/F P311DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq9b7gM9kKKP31rxmHRnzMy_ZHnIzW_Bzk7dBiIajp0gTmPmz0cpWoiisEBBv4i7BiD4&usqp=CAU",
    alt: "Ricoh S/F P311DN",
    link: "../impresoras/impresora18.html",
        price: 240000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "Brother M/F DCP-7055",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKJ_1IPgL1KUJuGvMpPVE-Ata0bWc91CUxQ&s",
    alt: "Brother M/F DCP-7055",
    link: "../impresoras/impresora19.html",
    price: 135000,
    deliveryfree: true,
    oferta :false,
  },
  {
    name: "Lexmark M/F MX611DHE",
    img: "https://m.media-amazon.com/images/I/718pW7jkzbL._AC_UF894,1000_QL80_.jpg",
    alt: "Lexmark M/F MX611DHE",
    link: "../impresoras/impresora20.html",
    price: 230000,
    deliveryfree : false,
    oferta :true,
  },
  {
    name: "HP S/F Laserjet 107A",
    img: "https://images.fravega.com/f1000/2f0c3f7bb6de55993c77148eddac0140.jpg",
    alt: "HP S/F Laserjet 107A",
    link: "../impresoras/impresora21.html",
    price: 110000,
    deliveryfree :true,
    oferta :false,
  },
  {
    name: "Brother M/F DCP-1617NW",
    img: "https://www.venex.com.ar/products_images/1500648885_1617nw2.jpg",
    alt: "Brother M/F DCP-1617NW",
    link: "../impresoras/impresora22.html",
        price: 140000,
          deliveryfree :false,
    oferta :true,
  },
  {
    name: "HP M/F Laserjet M201DW",
    img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04421076.png?imdensity=1&impolicy=Png_Res",
    alt: "HP M/F Laserjet M201DW",
    link: "../impresoras/impresora23.html",
        price: 140000,
          deliveryfree :true,
    oferta :false,
  },
  {
    name: "HP S/F Laserjet Pro P1606",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbeOB-wUQQNfaUbCVHVrvlbDMe7-8qvgcQ&s",
    alt: "HP S/F Laserjet Pro P1606",
    link: "../impresoras/impresora24.html",
    price: 115000,
    deliveryfree :false,
    oferta :true,
  },
 {
    name: "Lexmark S/F Ms431Dn",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsHa65icXPnK8ttIIADcB0QPRUZ9VYgHVxw&s",
    alt: "Lexmark S/F Ms431Dn",
    link: "../impresoras/impresora25.html",
    price: 250000,
    deliveryfree :false,
    oferta :true,
  },
   {
    name: "Brother M/F DCP 8155DN",
    img: "https://http2.mlstatic.com/D_NQ_NP_855324-MLA84040484925_042025-O.webp",
    alt: "Brother M/F DCP 8155DN",
    link: "../impresoras/impresora26.html",
    price: 270000,
    deliveryfree :false,
    oferta :true,
  } ,
   {
    name: "Hp S/F Laserjet 1020",
    img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c02920588.png",
    alt : "Hp S/F Laserjet 1020"
    link: "../impresoras/impresora27.html",
    price: 85000,
    deliveryfree: true,
    oferta: false,
  },
  {
    name: "Hp S/F Laserjet Pro M401N",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQverMSFy1NuKaES43M4RIJnTsG8Df1fGcftQ&s",
    alt: "Hp S/F Laserjet Pro M401N",
    link: "../impresoras/impresora28.html",
    price: 140000,
      deliveryfree :true,
    oferta :false,
  },



];
*/
// let products = [];

const container = document.querySelector('.listadoImpresoras'); // listadoImpresoras es el section padre de las cards

// Función para crear una tarjeta de producto
function createProductCard(product) {
  const card = document.createElement('article');
  card.classList.add('card');

  const name = document.createElement('h4');
  name.textContent = product.name;

  const img = document.createElement('img');
  img.src = product.img;
  img.alt = product.alt;

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = 'Precio: $' + product.price;

  const link = document.createElement('a');
  link.href = product.link;
  link.classList.add('boton-vermas');
  link.textContent = 'Ver más';

  const oferta = document.createElement('p');
  if (product.oferta === true) {
    oferta.textContent = '¡Oferta disponible!';
    oferta.style.color = 'red';
    oferta.style.fontWeight = 'bold';
  }

  const envio = document.createElement('p');
  if (product.deliveryfree === true) {
    envio.textContent = 'Envío gratis';
    envio.style.color = 'green';
  }

  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Agregar al carrito';
  botonComprar.classList.add('Agregar');
 botonComprar.addEventListener('click', () => {
    agregarAlListado(product);
  });

  card.appendChild(name);
  card.appendChild(oferta);
  card.appendChild(envio);
  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(link);
  card.appendChild(botonComprar);

  return card;
}

// Función para renderizar todas las tarjetas
function renderProductCards(products) {
  container.innerHTML = ''; // Limpiamos primero por si hay algo ya
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// Función para obtener productos desde Airtable

async function fetchProductsFromAirtable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const data = await response.json();

    // Diagnóstico: ver qué llega desde Airtable
    console.log("Datos desde Airtable:", data.records);

    // Filtro por categoría - más flexible
    const impresorasFiltradas = data.records.filter(record => {
      const categoria = record.fields.categoria;
      return categoria && categoria.trim().toLowerCase() === "impresora";
    });

    // Diagnóstico: ver cuántas impresoras pasan el filtro
    console.log("Productos filtrados:", impresorasFiltradas);

    // Mapear solo las impresoras
    products = impresorasFiltradas.map(record => ({
      id: record.id, // Importante: uso el ID único de Airtable para pder después usarlo el el carrito
      name: record.fields.name || 'Sin nombre',
      img: record.fields.img || 'https://via.placeholder.com/150',       
      alt: record.fields.alt || 'Producto',
      link: record.fields.link || '#',
      price: record.fields.price || 0,
      deliveryfree: record.fields.deliveryfree || false,
      oferta: record.fields.oferta || false
    }));

    renderProductCards(products);

  } catch (error) {
    console.error("Error al obtener productos desde Airtable:", error);
    document.querySelector('.listadoImpresoras').innerHTML = `
      <p>❌ Hubo un error al cargar las impresoras. Verifica la consola.</p>
    `;
  }
}

// Llamamos a la función al cargar
fetchProductsFromAirtable();




// AGREGAR AL CARRITO 
const listaAgregados = document.getElementById('lista-agregados');


function agregarAlListado(product) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const index = carrito.findIndex(p => p.id === product.id);

  if (index === -1) {
    // Si no existe, lo agrego con cantidad 1
    carrito.push({...product, cantidad: 1});
  } else {
    // Si ya existe, aumento la cantidad
    carrito[index].cantidad++;
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarritoDesdeLocalStorage();
}


// BOTÓN para vaciar el carrito
const btnVaciarCarrito = document.getElementById('btn-vaciar-carrito');

btnVaciarCarrito.addEventListener('click', () => {
  listaAgregados.innerHTML = '';
  localStorage.removeItem('carrito');
  alert('🗑️ Carrito vaciado correctamente.');
});

// BOTÓN para mostrar/ocultar carrito
const botonToggle = document.getElementById('toggle-carrito');
const carrito = document.getElementById('carrito');

botonToggle.addEventListener('click', () => {
  carrito.classList.toggle('visible');
});



// Función para cargar los productos del carrito desde localStorage y renderizarlos

function cargarCarritoDesdeLocalStorage() {
  const listaAgregados = document.getElementById("lista-agregados");
  if (!listaAgregados) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  listaAgregados.innerHTML = "";

  let totalGeneral = 0;

  carrito.forEach((product, index) => {
    const li = document.createElement("li");
    li.classList.add("card");

    // Imagen
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.alt;
    img.style.width = "100px";

    // Nombre
    const name = document.createElement("h4");
    name.textContent = product.name;

    // Precio unitario
    const price = document.createElement("p");
    price.textContent = `Precio unitario: $${product.price}`;

    // Cantidad con botones
    const cantidadContainer = document.createElement("div");
    cantidadContainer.style.display = "flex";
    cantidadContainer.style.alignItems = "center";
    cantidadContainer.style.gap = "10px";

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.style.padding = "2px 8px";
    btnMenos.style.cursor = "pointer";

    const spanCantidad = document.createElement("span");
    spanCantidad.textContent = product.cantidad;

    const btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.style.padding = "2px 8px";
    btnMas.style.cursor = "pointer";

    cantidadContainer.appendChild(btnMenos);
    cantidadContainer.appendChild(spanCantidad);
    cantidadContainer.appendChild(btnMas);

    // Subtotal producto
    const subtotal = product.price * product.cantidad;
    totalGeneral += subtotal;

    const subtotalP = document.createElement("p");
    subtotalP.textContent = `Subtotal: $${subtotal}`;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.backgroundColor = "#e74c3c";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.padding = "4px 8px";
    btnEliminar.style.cursor = "pointer";

    // Eventos botones
    btnMenos.addEventListener("click", () => {
      if (product.cantidad > 1) {
        product.cantidad--;
        carrito[index] = product;
      } else {
        // Si la cantidad es 1 y se presiona "-", se elimina del carrito
        carrito.splice(index, 1);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      cargarCarritoDesdeLocalStorage();
    });

    btnMas.addEventListener("click", () => {
      product.cantidad++;
      carrito[index] = product;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      cargarCarritoDesdeLocalStorage();
    });

    btnEliminar.addEventListener("click", () => {
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      cargarCarritoDesdeLocalStorage();
    });

    // Agregamos al li
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(cantidadContainer);
    li.appendChild(subtotalP);
    li.appendChild(btnEliminar);

    listaAgregados.appendChild(li);
  });

  // Mostrar total general y botón finalizar compra debajo del carrito

  // Primero, eliminamos si ya existe el contenedor de total y finalizar para evitar duplicados
  const totalExistente = document.getElementById("total-carrito");
  if (totalExistente) totalExistente.remove();

  const finalizarExistente = document.getElementById("finalizar-compra");
  if (finalizarExistente) finalizarExistente.remove();

  if (carrito.length > 0) {
    const totalDiv = document.createElement("div");
    totalDiv.id = "total-carrito";
    totalDiv.style.marginTop = "15px";
    totalDiv.style.fontWeight = "bold";
    totalDiv.textContent = `Total a pagar: $${totalGeneral}`;

    listaAgregados.parentElement.appendChild(totalDiv);

    const botonFinalizar = document.createElement("button");
    botonFinalizar.id = "finalizar-compra";
    botonFinalizar.textContent = "Finalizar compra";
    botonFinalizar.style.marginTop = "10px";
    botonFinalizar.style.padding = "10px 20px";
    botonFinalizar.style.cursor = "pointer";
    botonFinalizar.style.backgroundColor = "#27ae60";
    botonFinalizar.style.color = "white";
    botonFinalizar.style.border = "none";
    botonFinalizar.style.borderRadius = "5px";

    botonFinalizar.addEventListener("click", () => {
      alert(`Gracias por tu compra! Total a pagar: $${totalGeneral}`);
      localStorage.removeItem("carrito");
      cargarCarritoDesdeLocalStorage();
    });

    listaAgregados.parentElement.appendChild(botonFinalizar);
  }
}
  

cargarCarritoDesdeLocalStorage(); // al recargar la página, se muestren los productos del carrito si estaban guardados

// //clase 7  : probamos el llamado de prod mediante una Api

// Hacemos una función async, sacamos el ejemplo de la fotocopia , me metemos try catch para un mejor

// const container = document.querySelector('.listadoImpresoras');

// // función para crear tarjetas dinámicas
// function createProductCard(product) {
//   const card = document.createElement('article');
//   card.classList.add('card');

//   const name = document.createElement('h4');
//   name.textContent = product.name || product.title; // dummyjson usa title por eso lo cambie  

//   const img = document.createElement('img'); 
//   img.src = product.img || product.thumbnail; 
//   img.alt = product.alt || product.title;

//   const price = document.createElement('p');
//   price.classList.add('price');
//   price.textContent = 'Precio: $' + product.price;

//   const link = document.createElement('a');
//   link.href = product.link || '#';
//   link.classList.add('boton-vermas');
//   link.textContent = 'Ver más';

//   const oferta = document.createElement('p');
//   if (product.oferta === true || product.discountPercentage > 15) {
//     oferta.textContent = '¡Oferta disponible!';
//     oferta.style.color = 'red';
//     oferta.style.fontWeight = 'bold';
//   }

//   const envio = document.createElement('p');
//   if (product.deliveryfree === true || product.stock > 100) {
//     envio.textContent = 'Envío gratis';
//     envio.style.color = 'green';
//   }

//   const botonComprar = document.createElement('button');
//   botonComprar.textContent = 'Agregar';
//   botonComprar.classList.add('boton-agregar');

//   card.appendChild(name);
//   card.appendChild(img);
//   card.appendChild(price); 
//   card.appendChild(oferta);
//   card.appendChild(envio);
//   card.appendChild(link);
//   card.appendChild(botonComprar);

//   return card;
// }

// // función async para obtener productos de la API
// const getProducts = async () => {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     const productos = data.products;

//     // recorrer cada producto y generar tarjeta
//     productos.forEach(product => {
//       const card = createProductCard(product);
//       container.appendChild(card);
//     });

//   } catch (error) {
//     console.error('Error al obtener los productos:', error);
//   }
// };

// getProducts();

