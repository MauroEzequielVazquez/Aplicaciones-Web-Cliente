
// Lista de productos
const products = [
  {   // en los prod, PONEMOS LOS MISMOS DATOS QUE TENEMOS EN html
    title: "Brother M/F MFC-L5900DW",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCtcTWWsVZur7UZ9QFRYoWbohZps3ZkUrLw&s",
    alt: "Brother MFC-L5900DW",
    link: "../impresoras/impresora1.html",
    price: 340000,
  },
  {
    title: "HP LaserJet S/F Pro M12w",
    img: "https://images.fravega.com/f1000/2ba3460542959e228ee238602f4b06f4.jpg",
    alt: "HP LaserJet Pro M12w",
    link: "../impresoras/impresora2.html",
    price: 135000,
  },
  {
    title: "HP LaserJet S/F Pro P1102w",
    img: "https://silex.com.ar/wp-content/uploads/2022/03/Impresora-HP-1102w.jpg",
    alt: "HP LaserJet Pro P1102w",
    link: "../impresoras/impresora3.html",
    price: 140000,
  },
  {
    title: "Xerox M/F B235 Multifunción",
    img: "https://intermaco.com.ar/productos/B235V_DNI.jpg",
    alt: "Xerox B235",
    link: "../impresoras/impresora4.html",
    price: 340000,
    
  },
  {
    title: "Lexmark M/F MX812DFE",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YXnyNmGlcEu0KIq3JqRjksq2xoiL5Uv7HQ&s",
    alt: "Lexmark MX812DFE",
    link: "../impresoras/impresora5.html",
    price: 460000,
  },
  {
    title: "HP LaserJet S/F Pro P1006",
    img: "https://img.drz.lazcdn.com/static/pk/p/dfa66d9eba0fd6b63394dda2185aacc4.jpg_720x720q80.jpg",
    alt: "HP LaserJet Pro P1006",
    link: "../impresoras/impresora6.html",
    price: 100000,
    
  },
  {
    title: "Brother M/F DCP 8080DN",
    img: "https://http2.mlstatic.com/D_NQ_NP_705358-MLA32285211836_092019-O.webp",
    alt: "Brother DCP 8080DN",
    link: "../impresoras/impresora7.html",
        price: 100000,
  },
  {
    title: "Brother S/F 1212w",
    img: "https://images.fravega.com/f300/2f590ca0527ae3e804410a6a82de0c55.jpg.webp",
    alt: "Brother 1212w",
    link: "../impresoras/impresora8.html",
        price: 100000,
  },
  {
    title: "Oki S/F C562DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmQM9vAwQCVpkQPbsL5HkUkgfosF20qfs1g&s",
    alt: "Oki C562DN",
    link: "../impresoras/impresora9.html",
        price: 100000,
  },
  {
    title: "Ricoh M/F 3710SF",
    img: "https://http2.mlstatic.com/D_NQ_NP_985776-MLA45754281308_042021-O.webp",
    alt: "Ricoh 3710SF",
    link: "../impresoras/impresora10.html",
        price: 100000,
  },
  {
    title: "Samsung S/F Xpress SL-2020W",
    img: "https://http2.mlstatic.com/D_NQ_NP_21999-MLA20221973444_012015-O.webp",
    alt: "Samsung Xpress SL-2020W",
    link: "../impresoras/impresora11.html",
        price: 100000,
  },
  {
    title: "Samsung M/F Xpress SL-M2070W",
    img: "https://datacop.com.ar/images/stories/datacop/multifuncion-samsung-xpress-sl-m2070w-wi-fi.jpg",
    alt: "Samsung Multifunción Xpress SL-M2070W",
    link: "../impresoras/impresora12.html",
        price: 100000,
  },
  {
    title: "Minolta M/F SBizHub C251",
    img: "https://d1nz2cwxocqem8.cloudfront.net/image/380230487157/image_dar042ot512d503hv8mf55h45s/-FWEBP,Q75,-S3840",
    alt: "Impresora Multifunción BizHub C251",
    link: "../impresoras/impresora13.html",
        price: 100000,
  },
  {
    title: "Brother S/F HL-1200",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9R24hWBJHBfLkLZapV6-wfjxCkUEAT-oVJg&s",
    alt: "Brother HL-1200",
    link: "../impresoras/impresora14.html",
        price: 100000,
  },
  {
    title: "HP S/F Laserjet 107W",
    img: "https://my-media.apjonlinecdn.com/catalog/product/4/Z/4ZB78A-1_T1678955593.png",
    alt: "HP Laserjet 107W",
    link: "../impresoras/impresora15.html",
        price: 100000,
  },
  {
    title: "Brother M/F DCP 7065DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bbxkCskUGtdG99LllCTDnEdB3SLKGVuJ8g&s",
    alt: "Brother M/F DCP 7065DN",
    link: "../impresoras/impresora16.html",
        price: 100000,
  },
  {
    title: "Xerox S/F 3020",
    img: "https://images.fravega.com/f1000/86818c9c27df7404060e689606d19211.jpg",
    alt: "Xerox 3020",
    link: "../impresoras/impresora17.html",
        price: 100000,
  },
  {
    title: "Ricoh S/F P311DN",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq9b7gM9kKKP31rxmHRnzMy_ZHnIzW_Bzk7dBiIajp0gTmPmz0cpWoiisEBBv4i7BiD4&usqp=CAU",
    alt: "Ricoh S/F P311DN",
    link: "../impresoras/impresora18.html",
        price: 100000,
  },
  {
    title: "Brother M/F DCP-7055",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKJ_1IPgL1KUJuGvMpPVE-Ata0bWc91CUxQ&s",
    alt: "Brother M/F DCP-7055",
    link: "../impresoras/impresora19.html",
        price: 100000,
  },
  {
    title: "Lexmark M/F MX611DHE",
    img: "https://m.media-amazon.com/images/I/718pW7jkzbL._AC_UF894,1000_QL80_.jpg",
    alt: "Lexmark M/F MX611DHE",
    link: "../impresoras/impresora20.html",
        price: 100000,
  },
  {
    title: "HP S/F Laserjet 107A",
    img: "https://images.fravega.com/f1000/2f0c3f7bb6de55993c77148eddac0140.jpg",
    alt: "HP S/F Laserjet 107A",
    link: "../impresoras/impresora21.html",
        price: 100000,
  },
  {
    title: "Brother M/F DCP-1617NW",
    img: "https://www.venex.com.ar/products_images/1500648885_1617nw2.jpg",
    alt: "Brother M/F DCP-1617NW",
    link: "../impresoras/impresora22.html",
        price: 100000,
  },
  {
    title: "HP M/F Laserjet M201DW",
    img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04421076.png?imdensity=1&impolicy=Png_Res",
    alt: "HP M/F Laserjet M201DW",
    link: "../impresoras/impresora23.html",
        price: 100000,
  },
  {
    title: "HP S/F Laserjet Pro P1606",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbeOB-wUQQNfaUbCVHVrvlbDMe7-8qvgcQ&s",
    alt: "HP S/F Laserjet Pro P1606",
    link: "../impresoras/impresora24.html",
        price: 100000,
  }
];

const container = document.querySelector('.listadoImpresoras'); // listadoimpresoras es la class del section que contenía el html de las card, o sea la class de la etiqueta PADRE!!
                                                        
// función para CREAR TARJETAS
// PRIMERO creamos la card que es un article, y dentro del article metemos las card
function createProductCard(product) {
  const card = document.createElement('article'); // se llama card el elemento creado
  card.classList.add('card'); // la LISTA va agregando a las impresoras que cree en los prod

  // Luego creo los campos de esas tarjetas, LOS MISMOS que tenía en html
  const title = document.createElement('h4');
  title.textContent = product.title;

  const img = document.createElement('img');
  img.src = product.img;
  img.alt = product.alt;

  const link = document.createElement('a');
  link.href = product.link;
  link.classList.add('boton-vermas');
  link.textContent = 'Ver más';






  // ahora ya tenemos los elementos creados pero SUELTOS, entonces vamos a agregarlos a la variable card.appendChild y vamos a agregar a los hijos
  // card es la VARIABLE article, donde contengo toda la info de los prod

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(link);

  return card; // puede tener o no return, y no tenés que especificar qué tipo de dato devuelve en JS, tenés que prestar atención
               // ya retorno la variable card con todos los elementos hijos cargados
}

// luego hacemos un forEach y recorremos la variable products, para que vaya creando las tarjetas, por cada prod crea 1 tarjeta
// en cada vuelta le va asignando a la variable product el elemento de la tarjeta
products.forEach(product => {
  const card = createProductCard(product); // le paso de parámetro el producto que recorro
  container.appendChild(card); // luego debo INSERTARLO A MI DOM
});
                                                 


//manejo de eventos, boton click
  //queryselector es como un buscador de elementos que tenia en html, una class, un id, un tipo de selector (footer, section, article, etc)

const button = document.querySelector('#btn-add-products');

button.addEventListener('click', () => {
  alert('Agregado!');
});





const inputNombre = document.querySelector('#busqueda');
const inputPrecioMin = document.querySelector('#precio-min');
const inputPrecioMax = document.querySelector('#precio');

// cuando aprieto enter en el input de buscar nombre
inputNombre.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    filtrarProductos(); // llamo a una función para hacer el filtro
  }
});

// también me sirve con el botón "Buscar"
const botonBuscar = document.querySelector('#btn-buscar-products');
botonBuscar.addEventListener('click', () => {
  filtrarProductos();
});

// función para mostrar solo los productos filtrados
function filtrarProductos() {
  const texto = inputNombre.value.toLowerCase(); // convierto a minúsculas
  const precioMin = parseInt(inputPrecioMin.value) || 0; // si no hay valor, usa 0
  const precioMax = parseInt(inputPrecioMax.value) || Infinity; // si no hay valor, usa infinito

  container.innerHTML = ''; // limpio lo que ya está mostrado

  // filtro los productos
  const productosFiltrados = products.filter(producto => {
    const coincideNombre = producto.title.toLowerCase().includes(texto);
    const coincidePrecio = producto.price >= precioMin && producto.price <= precioMax;
    return coincideNombre && coincidePrecio;
  });

  // si no hay nada que mostrar
  if (productosFiltrados.length === 0) {
    container.innerHTML = '<p>No se encontraron productos.</p>';
    return;
  }

  // muestro los productos filtrados
  productosFiltrados.forEach(producto => {
    const card = createProductCard(producto);
    container.appendChild(card);
  });
}