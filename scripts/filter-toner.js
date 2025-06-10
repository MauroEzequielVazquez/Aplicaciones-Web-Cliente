// Capturamos elementos del DOM para filtros
const inputBusqueda = document.getElementById("busqueda");
const inputPrecioMax = document.getElementById("precio-max");
const inputPrecioMin = document.getElementById("precio-min");
const checkboxOfertas = document.getElementById("ofertas");
const checkboxEnvio = document.getElementById("envio");
const botonLimpiar = document.getElementById("limpiar-filtros");
const listadoImpresoras = document.querySelector(".listadoImpresoras");

// Eventos para los filtros
inputBusqueda.addEventListener("input", filtrarImpresoras);
inputPrecioMax.addEventListener("input", filtrarImpresoras);
inputPrecioMin.addEventListener("input", filtrarImpresoras);
checkboxOfertas.addEventListener("change", filtrarImpresoras);
checkboxEnvio.addEventListener("change", filtrarImpresoras);

botonLimpiar.addEventListener("click", () => {
  inputBusqueda.value = "";
  inputPrecioMax.value = "";
  inputPrecioMin.value = "";
  checkboxOfertas.checked = false;
  checkboxEnvio.checked = false;
  filtrarImpresoras();
});

// Función para filtrar las impresoras
function filtrarImpresoras() {
  // Tomamos los valores del filtro
  const busqueda = inputBusqueda.value.toLowerCase();
  const precioMax = parseFloat(inputPrecioMax.value) || Infinity;
  const precioMin = parseFloat(inputPrecioMin.value) || 0;
  const ofertas = checkboxOfertas.checked;
  const envio = checkboxEnvio.checked;

  // Filtramos el array global 'products' con las condiciones
  const impresorasFiltradas = products.filter((product) => {
    const nombre = product.name.toLowerCase();
    const precio = product.price;
    const tieneOferta = !!product.oferta;
    const tieneEnvioGratis = !!product.deliveryfree;

    return (
      nombre.includes(busqueda) &&
      precio >= precioMin &&
      precio <= precioMax &&
      (!ofertas || tieneOferta) &&
      (!envio || tieneEnvioGratis)
    );
  });

  // Limpiamos el contenedor y renderizamos los filtrados
  listadoImpresoras.innerHTML = "";
  impresorasFiltradas.forEach((product) => {
    const card = createImpresoraCard(product);
    listadoImpresoras.appendChild(card);
  });
}
