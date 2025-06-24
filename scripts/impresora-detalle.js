// === Datos de conexión con Airtable ===
const API_TOKEN = "patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1";
const BASE_ID = "appy5Akrxlk1wQUzj";
const TABLE_NAME = "tabla";

// Obtener ID del producto desde la URL
const RECORD_ID = new URLSearchParams(window.location.search).get("id");
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${RECORD_ID}`;

// Elementos del DOM
const titulo = document.querySelector("header h1");
const imgProducto = document.getElementById("producto-img");
const listaEspec = document.getElementById("producto-especificaciones");
const btnVolver = document.getElementById("btn-volver");

// Cargar los datos desde Airtable
async function cargarDetalleProducto() {
  if (!RECORD_ID) {
    mostrarError("⚠️ No se encontró un ID de producto en la URL.");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error("Producto no encontrado");

    const data = await res.json();

    const product = {
      id: data.id,
      name: data.fields.name || "Sin nombre",
img: typeof data.fields.img === 'string'
      ? data.fields.img
      : (Array.isArray(data.fields.img) && data.fields.img.length > 0
      ? data.fields.img[0].url
      : "https://via.placeholder.com/300x300?text=Sin+Imagen"),
      alt: data.fields.alt || "Producto sin descripción",
      price: data.fields.price
        ? `$${Number(data.fields.price).toLocaleString("es-AR")}`
        : "No disponible",
      specs: {
        type: data.fields.type || "No especificado",
        functions: data.fields.functions || "No especificado",
        duplex: data.fields.duplex ? "Sí" : "No",
        connection: data.fields.connection || "No especificado",
        speed: data.fields.speed || "No especificado",
        resolution: data.fields.resolution || "No especificado",
      },
    };

    actualizarDOM(product);
    document.title = product.name;

  } catch (error) {
    console.error("Error al obtener producto:", error);
    mostrarError(`❌ Producto no encontrado. Detalle: ${error.message}`);
  }
}

// Actualizar HTML con datos del producto
function actualizarDOM(product) {
  if (titulo) titulo.textContent = product.name;

  if (imgProducto) {
    imgProducto.src = product.img;
    imgProducto.alt = product.alt;
  }

  if (listaEspec) {
    listaEspec.innerHTML = `
      <li><strong>Tipo:</strong> ${product.specs.type}</li>
      <li><strong>Funciones:</strong> ${product.specs.functions}</li>
      <li><strong>Doble cara automática:</strong> ${product.specs.duplex}</li>
      <li><strong>Conectividad:</strong> ${product.specs.connection}</li>
      <li><strong>Velocidad:</strong> ${product.specs.speed}</li>
      <li><strong>Resolución:</strong> ${product.specs.resolution}</li>
      <li><strong>Precio:</strong> ${product.price}</li>
    `;
  }

  if (btnVolver) {
    btnVolver.href = "../HTML/index.html";
  }
}

// Mostrar error si no se pudo cargar
function mostrarError(mensaje) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <h2>${mensaje}</h2>
    <a href="../HTML/index.html" class="boton-vermas">← Volver al catálogo</a>
  `;
}

// Ejecutar al cargar
window.addEventListener("DOMContentLoaded", cargarDetalleProducto);
