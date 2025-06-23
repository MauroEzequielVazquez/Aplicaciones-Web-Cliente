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

/**
 * Función principal que carga los datos del producto desde Airtable
 */
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

    if (!res.ok) {
      throw new Error("Producto no encontrado");
    }

    const data = await res.json();

    // Extraer campos del producto
    const product = {
      id : data.id,
      name: data.fields.name || "Sin nombre",
      img: data.fields.img?.[0]?.url || "https://via.placeholder.com/300x300?text=Sin+Imagen",
      alt: data.fields.alt || "Producto sin descripción",
      price: data.fields.price ? `$${Number(data.fields.price).toLocaleString()}` : "No disponible",
      specs: {
        type: data.fields.type || "No especificado",
        functions: data.fields.functions || "No especificado",
        duplex: data.fields.duploFace ? "Sí" : "No", // 👈 Aquí lo guardas como 'duplex'
        connection: data.fields.connection || "No especificado",
        speed: data.fields.speed || "No especificado",
        resolution: data.fields.resolution || "No especificado"
      }
    };

    // Actualizar elementos del DOM
    actualizarDOM(product);

    // Cambiar el título de la pestaña
    document.title = product.name;

  } catch (error) {
    console.error("Error al obtener producto:", error);
    mostrarError(`❌ Producto no encontrado. Detalle: ${error.message}`);
  }
}

/**
 * Actualiza el contenido dinámico del HTML con los datos del producto
 */
function actualizarDOM(product) {
  // Título
  if (titulo) titulo.textContent = product.name;

  // Imagen
  if (imgProducto) {
    imgProducto.src = product.img;
    imgProducto.alt = product.alt;
  }

  // Especificaciones
  if (listaEspec) {
    listaEspec.innerHTML = `
      <li><strong>Tipo:</strong> ${product.specs.type}</li>
      <li><strong>Funciones:</strong> ${product.specs.functions}</li>
      <li><strong>Doble cara automática:</strong> ${product.specs.duplex}</li> <!-- ✅ Correcto -->
      <li><strong>Conectividad:</strong> ${product.specs.connection}</li>
      <li><strong>Velocidad:</strong> ${product.specs.speed}</li>
      <li><strong>Resolución:</strong> ${product.specs.resolution}</li>
      <li><strong>Precio:</strong> ${product.price}</li>
    `;
  }

  // Botón de volver
  if (btnVolver) {
    btnVolver.href = "../HTML/index.html"; // Puedes cambiar esto si usas otra ruta
  }
}

/**
 * Muestra un mensaje de error en lugar del contenido
 */
function mostrarError(mensaje) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <h2>${mensaje}</h2>
    <a href="../HTML/index.html" class="boton-vermas">← Volver al catálogo</a>
  `;
}

// Ejecutar función al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  console.log({
    titulo,
    imgProducto,
    listaEspec,
    btnVolver
  });
  cargarDetalleProducto();
});