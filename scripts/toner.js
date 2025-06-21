// Datos necesarios para la conexión con Airtable
const API_TOKEN = 'patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1';
const BASE_ID = 'appy5Akrxlk1wQUzj';
const TABLE_NAME = 'tabla';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

// Elementos del DOM
const listado = document.querySelector(".listadoToners");
const listaAgregados = document.getElementById("lista-agregados-en-carrito");
const contenedorCarrito = document.getElementById("carrito");
const botonToggle = document.getElementById("toggle-carrito");
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito");

let products = []; // Variable global para los tóners

// Función principal - obtiene productos desde Airtable
async function fetchTonersFromAirtable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

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

// Crea una tarjeta de producto
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
  price.textContent = "Precio: $" + toner.price;

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

  const oferta = document.createElement("p");
  if (toner.oferta === true) {
    oferta.textContent = "¡Oferta Disponible!";
    oferta.style.color = "red";
    oferta.style.fontWeight = "bold";
    card.appendChild(oferta);
  }

  const envio = document.createElement("p");
  if (toner.deliveryfree === true) {
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

// Renderiza las tarjetas
function renderTonerCards(toners) {
  listado.innerHTML = "";

  if (toners.length === 0) {
    listado.innerHTML = "<p>No hay tóners disponibles</p>";
    return;
  }

  toners.forEach((toner) => {
    const card = createTonerCard(toner);
    listado.appendChild(card);
  });
}

// Agrega al carrito sin duplicar
function agregarAlListado(toner) {
  let carritoData = JSON.parse(localStorage.getItem("carrito")) || [];

  const yaExiste = carritoData.some(p => p.id === toner.id);

  if (!yaExiste) {
    carritoData.push(toner);
    localStorage.setItem("carrito", JSON.stringify(carritoData));
    cargarCarritoDesdeLocalStorage();
    alert(`✅ "${toner.name}" agregado al carrito.`);
  } else {
    alert("⚠️ Ya está en el carrito.");
  }
}

// Cargar y mostrar carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
  if (!listaAgregados) return;

  const carritoData = JSON.parse(localStorage.getItem("carrito")) || [];
  listaAgregados.innerHTML = "";

  carritoData.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("card");

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.alt;
    img.style.width = "100px";

    const name = document.createElement("h4");
    name.textContent = product.name;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.backgroundColor = "#e74c3c";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.padding = "4px 8px";
    btnEliminar.style.cursor = "pointer";

    btnEliminar.addEventListener("click", () => {
      const nuevoCarrito = carritoData.filter(item => item.id !== product.id);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      cargarCarritoDesdeLocalStorage();
    });

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(btnEliminar);
    listaAgregados.appendChild(li);
  });
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

// Mostrar u ocultar carrito
if (botonToggle && contenedorCarrito) {
  botonToggle.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("visible");
  });
}

// Filtro de tóners
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

// Al cargar la página
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
