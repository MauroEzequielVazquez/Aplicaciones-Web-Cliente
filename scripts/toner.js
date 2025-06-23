// Datos de conexión Airtable
const API_TOKEN = 'patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1';
const BASE_ID = 'appy5Akrxlk1wQUzj';
const TABLE_NAME = 'tabla';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

// DOM
const listado = document.querySelector(".listadoToners");
const listaAgregados = document.getElementById("lista-agregados-en-carrito");
const contenedorCarrito = document.getElementById("carrito");
const botonToggle = document.getElementById("toggle-carrito");
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito");



// Variable global productos cargados desde Airtable
let products = [];

// Traer tóners de Airtable
async function fetchTonersFromAirtable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    // Filtrar solo los tóners
    const tonersFiltrados = data.records.filter(record => {
      const categoria = record.fields.categoria;
      return categoria && categoria.trim().toLowerCase() === "toner";
    });

    products = tonersFiltrados.map(record => ({
      id: record.id,
      name: record.fields.name || "Sin nombre",
      img: record.fields.img || "https://via.placeholder.com/150",
      alt: record.fields.alt || "Producto sin imagen",
      link: record.fields.link || "#",
      price: record.fields.price || 0,
      deliveryfree: record.fields.deliveryfree || false,
      oferta: record.fields.oferta || false,
    }));

    renderTonerCards(products);
  } catch (error) {
    console.error("Error al obtener tóners:", error);
    listado.innerHTML = `<p>❌ No se pudieron cargar los tóners</p>`;
  }
}

// Crear tarjeta producto
function createTonerCard(toner) {
  const card = document.createElement("article");
  card.classList.add("card");

  const name = document.createElement("h4");
  name.textContent = toner.name;

  const img = document.createElement("img");
  img.src = toner.img;
  img.alt = toner.alt;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = "Precio: $" + toner.price.toLocaleString();

  const link = document.createElement("a");
  link.href = toner.link;
  link.classList.add("boton-vermas");
  link.textContent = "Ver más";

  const botonComprar = document.createElement("button");
  botonComprar.textContent = "Agregar al carrito";
  botonComprar.classList.add("Agregar", "boton-comprar");
  botonComprar.addEventListener("click", () => {
    agregarAlListado(toner);
  });

  if (toner.oferta) {
    const oferta = document.createElement("p");
    oferta.textContent = "¡Oferta Disponible!";
    oferta.style.color = "red";
    oferta.style.fontWeight = "bold";
    card.appendChild(oferta);
  }

  if (toner.deliveryfree) {
    const envio = document.createElement("p");
    envio.textContent = "Envío gratis";
    envio.style.color = "green";
    card.appendChild(envio);
  }

  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(botonComprar);

  return card;
}

// Renderizar tarjetas
function renderTonerCards(toners) {
  listado.innerHTML = "";

  if (toners.length === 0) {
    listado.innerHTML = "<p>No hay tóners disponibles</p>";
    return;
  }

  toners.forEach(toner => {
    const card = createTonerCard(toner);
    listado.appendChild(card);
  });
}

// Agregar al carrito (con cantidad = 1 si no está, o sumar si ya está)
function agregarAlListado(toner) {
  let carritoData = JSON.parse(localStorage.getItem("carrito")) || [];

  const index = carritoData.findIndex(p => p.id === toner.id);

  if (index === -1) {
    // Si no está, se agrega con cantidad 1
    carritoData.push({ ...toner, cantidad: 1 });
  } else {
    //Si ya está, aumenta ña cantidad
    carritoData[index].cantidad++;
  }

  localStorage.setItem("carrito", JSON.stringify(carritoData));
  cargarCarritoDesdeLocalStorage();
}

// Mostrar carrito con cantidades, subtotales y total

function cargarCarritoDesdeLocalStorage() {
  if (!listaAgregados) return;

  const carritoData = JSON.parse(localStorage.getItem("carrito")) || [];
  listaAgregados.innerHTML = "";

  if (carritoData.length === 0) {
    listaAgregados.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  let totalGeneral = 0;

  carritoData.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("card", "carrito-item");

    // Imagen
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.alt;
    img.style.width = "80px";

    // Nombre
    const name = document.createElement("h4");
    name.textContent = product.name;

    // Precio unitario
    const price = document.createElement("p");
    price.textContent = "Precio unitario: $" + product.price.toLocaleString();

    // Cantidad con botones + y -
    const divCantidad = document.createElement("div");
    divCantidad.classList.add("cantidad-control");

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.classList.add("btn-cantidad");
    btnMenos.addEventListener("click", () => {
      disminuirCantidad(product.id);
    });

    const spanCantidad = document.createElement("span");
    spanCantidad.textContent = product.cantidad;

    const btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.classList.add("btn-cantidad");
    btnMas.addEventListener("click", () => {
      aumentarCantidad(product.id);
    });

    divCantidad.appendChild(btnMenos);
    divCantidad.appendChild(spanCantidad);
    divCantidad.appendChild(btnMas);

    // Subtotal
    const subtotal = product.price * product.cantidad;
    totalGeneral += subtotal;

    const subtotalP = document.createElement("p");
    subtotalP.textContent = "Subtotal: $" + subtotal.toLocaleString();

    // Botón eliminar producto
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click", () => {
      eliminarDelCarrito(product.id);
    });

    // Armar item carrito
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(divCantidad);
    li.appendChild(subtotalP);
    li.appendChild(btnEliminar);

    listaAgregados.appendChild(li);
  });

  // 👉 Agrego botón "Finalizar compra"
  const finalizarExistente = document.getElementById("finalizar-compra");
  if (finalizarExistente) finalizarExistente.remove();

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
    alert(`Gracias por tu compra! Total a pagar: $${totalGeneral.toLocaleString()}`);
    localStorage.removeItem("carrito");
    cargarCarritoDesdeLocalStorage();
  });

  listaAgregados.parentElement.appendChild(botonFinalizar);

  // 👉 Mostrar total general
  const totalExistente = document.querySelector(".total-general");
  if (totalExistente) totalExistente.remove();

  const totalDiv = document.createElement("div");
  totalDiv.classList.add("total-general");
  totalDiv.textContent = "Total: $" + totalGeneral.toLocaleString();

  listaAgregados.appendChild(totalDiv);
}





// Funciones para modificar cantidades
function aumentarCantidad(id) {
  let carritoData = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carritoData.findIndex(p => p.id === id);
  if (index !== -1) {
    carritoData[index].cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carritoData));
    cargarCarritoDesdeLocalStorage();
  }
}

function disminuirCantidad(id) {
  let carritoData = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carritoData.findIndex(p => p.id === id);
  if (index !== -1) {
    if (carritoData[index].cantidad > 1) {
      carritoData[index].cantidad--;
    } else {
      // Si la cantidad es 1 y se quiere disminuir, eliminar producto
      carritoData.splice(index, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(carritoData));
    cargarCarritoDesdeLocalStorage();
  }
}

// Eliminar producto por ID
function eliminarDelCarrito(id) {
  let carritoData = JSON.parse(localStorage.getItem("carrito")) || [];
  carritoData = carritoData.filter(item => item.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carritoData));
  cargarCarritoDesdeLocalStorage();
}

// Vaciar carrito
if (btnVaciarCarrito) {
  btnVaciarCarrito.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    cargarCarritoDesdeLocalStorage();
    alert("🗑️ Carrito vaciado correctamente.");
  });
}

// Toggle carrito visible / oculto
botonToggle.addEventListener("click", () => {
  contenedorCarrito.classList.toggle("visible");
  contenedorCarrito.classList.toggle("oculto");
});
// Filtro tóners
function filtrarToners() {
  const busqueda = document.getElementById("busqueda").value.toLowerCase();
  const precioMin = parseFloat(document.getElementById("precio-min").value) || 0;
  const precioMax = parseFloat(document.getElementById("precio-max").value) || Infinity;
  const filtroOferta = document.getElementById("ofertas").checked;
  const filtroEnvio = document.getElementById("envio").checked;

  const filtrados = products.filter((toner) => {
    const nombreLower = toner.name ? toner.name.toLowerCase() : "";
    const cumpleBusqueda = nombreLower.includes(busqueda);
    const cumplePrecio = typeof toner.price === "number" && toner.price >= precioMin && toner.price <= precioMax;
    const cumpleOferta = filtroOferta ? toner.oferta === true : true;
    const cumpleEnvio = filtroEnvio ? toner.deliveryfree === true : true;

    return cumpleBusqueda && cumplePrecio && cumpleOferta && cumpleEnvio;
  });

  renderTonerCards(filtrados);
}

// Init página
document.addEventListener("DOMContentLoaded", () => {
  fetchTonersFromAirtable();
  cargarCarritoDesdeLocalStorage();

  document.getElementById("busqueda")?.addEventListener("input", filtrarToners);
  document.getElementById("precio-min")?.addEventListener("input", filtrarToners);
  document.getElementById("precio-max")?.addEventListener("input", filtrarToners);
  document.getElementById("ofertas")?.addEventListener("change", filtrarToners);
  document.getElementById("envio")?.addEventListener("change", filtrarToners);

  document.getElementById("limpiar-filtros")?.addEventListener("click", () => {
    document.getElementById("busqueda").value = "";
    document.getElementById("precio-min").value = "";
    document.getElementById("precio-max").value = "";
    document.getElementById("ofertas").checked = false;
    document.getElementById("envio").checked = false;
    renderTonerCards(products);
  });
});
