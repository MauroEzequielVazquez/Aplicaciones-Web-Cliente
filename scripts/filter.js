
//manejo de eventos, boton click vistos en class 5
  //queryselector es como un buscador de elementos que tenia en html, una class, un id, un tipo de selector (footer, section, article, etc)

const button = document.querySelector('#btn-add-products');





// filtros clase 6

const inputNombre = document.querySelector('#busqueda');
const inputPrecioMax = document.querySelector('#precio-max');
const inputPrecioMin = document.querySelector('#precio-min');
inputNombre.addEventListener("input", aplicarFiltros);
inputPrecioMin.addEventListener("input", aplicarFiltros);
inputPrecioMax.addEventListener("input", aplicarFiltros);






// función para mostrar solo los productos filtrados

function aplicarFiltros() {
  const texto = inputNombre.value.toLowerCase();
  const precioMin = parseInt(inputPrecioMin.value) || 0;
  const precioMax = parseInt(inputPrecioMax.value) || Infinity;
  const filtrarOferta = document.getElementById("ofertas").checked;
  const filtrarEnvio = document.getElementById("envio").checked;

  container.innerHTML = '';

  const productosFiltrados = products.filter(producto => {
    const coincideNombre = producto.name.toLowerCase().includes(texto);
    const coincidePrecio = producto.price >= precioMin && producto.price <= precioMax;
    const coincideOferta = !filtrarOferta || producto.oferta === true;
    const coincideEnvio = !filtrarEnvio || producto.deliveryfree === true;

    return coincideNombre && coincidePrecio && coincideOferta && coincideEnvio;
  });

  if (productosFiltrados.length === 0) {
    container.innerHTML = '<p> No se encontraron productos, por favor vuelva a intentar.</p>';
    return;
  }

  productosFiltrados.forEach(producto => {
    const card = createProductCard(producto);
    container.appendChild(card);
  });
}


//filtro  para  los check box de off y envio, mediante Eventos

  document.getElementById("ofertas").addEventListener("change", aplicarFiltros);
  document.getElementById("envio").addEventListener("change", aplicarFiltros);



//func para limpiar  filtros



const btnLimpiar = document.querySelector('#limpiar-filtros');
btnLimpiar.addEventListener('click', () => {
  inputNombre.value = '';
  inputPrecioMin.value = '';
  inputPrecioMax.value = '';
  document.getElementById("ofertas").checked = false;
  document.getElementById("envio").checked = false;
  aplicarFiltros(); // vuelve a mostrar todo
});



// func add


if (product.oferta === true) {
  oferta.textContent = 'OFERTA';
  oferta.classList.add('etiqueta', 'oferta');
}

if (product.deliveryfree === true) {
  envio.textContent = 'ENVÍO GRATIS';
  envio.classList.add('etiqueta', 'envio');
}


// funciones de ej clase 6
const numbers = [1, 2, 3, 4, 5];
// map examples
/*
const squaredNumbers = numbers.map(p => p * p);
console.log('numeros', numbers);
console.log('numeros al cuadrado', squaredNumbers);
*/

// reduce examples
/*
const sum = numbers.reduce((accumulator, p) => {
    return accumulator + p;
},0);

console.log('original', numbers);
console.log('suma', sum);
*/

// // find examples 
const foundProduct = products.find(p => p.name.includes('a'));
const filteredProducts = products.filter(p => p.name.includes('a'));
console.log('producto encontrado', foundProduct);
console.log('productos filtrados', filteredProducts);

