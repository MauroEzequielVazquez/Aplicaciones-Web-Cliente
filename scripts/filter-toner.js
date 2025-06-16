
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

  listado.innerHTML = '';

  const productosFiltrados = toners.filter(toner => {
    const coincideNombre = toner.name.toLowerCase().includes(texto);
    const coincidePrecio = toner.price >= precioMin &&toner.price <= precioMax;
    const coincideOferta = !filtrarOferta || toner.oferta === true;
    const coincideEnvio = !filtrarEnvio || toner.deliveryfree === true;

    return coincideNombre && coincidePrecio && coincideOferta && coincideEnvio;
  });

  if (productosFiltrados.length === 0) {
    listado.innerHTML = '<p> No se encontraron productos, por favor vuelva a intentar.</p>';
    return;
  }

  productosFiltrados.forEach(toner => {
    const card = createProductCard(toner);
    listado.appendChild(card);
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

