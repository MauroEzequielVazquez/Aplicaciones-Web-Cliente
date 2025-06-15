// Datos de conexión con Airtable
const API_TOKEN = 'patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1';
const BASE_ID = 'appy5Akrxlk1wQUzj';
const TABLE_NAME = 'tabla';
const RECORD_ID = new URLSearchParams(window.location.search).get('id');

const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${RECORD_ID}`; 

// Elementos del DOM
const titulo = document.querySelector('header h1');
const imgProducto = document.querySelector('main img');
const listaEspec = document.querySelector('main ul');
const linkVolver = document.querySelector('.boton-vermas');

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
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    if (!res.ok) {
      throw new Error("Producto no encontrado");
    }

    const data = await res.json();

    // Extraer campos del producto
    const product = {
      name: data.fields.name || 'Sin nombre',
      img: data.fields.img || 'https://via.placeholder.com/300x300?text=Sin+Imagen',
      alt: data.fields.alt || 'Producto sin descripción',
      price: data.fields.price ? `$${Number(data.fields.price).toLocaleString()}` : 'Precio no disponible',
      specs: {
        tipo: data.fields.tipo || 'No especificado',
        funciones: data.fields.funciones || 'No especificado',
        dobleFaz: data.fields.dobleFaz ? 'Sí' : 'No',
        conectividad: data.fields.conectividad || 'No espe  cificado',
        velocidad: data.fields.velocidad || 'No especificado',
        resolucion: data.fields.resolucion || 'No especificado'
      },
      linkVolver: '../index.html'
    };

    // Actualizar elementos del DOM
    actualizarDOM(product);

  } catch (error) {
    console.error("Error al obtener producto:", error);
    mostrarError(`❌ Producto no encontrado. Detalle: ${error.message}`);
  }
}

/**
 * Actualiza el contenido dinámico del HTML con los datos del producto
 */
function actualizarDOM(product) {
  // Limpiar contenido previo si existe
  titulo.textContent = product.name;

  imgProducto.src = product.img;
  imgProducto.alt = product.alt;

  listaEspec.innerHTML = `
    <li><strong>Tipo:</strong> ${product.specs.tipo}</li>
    <li><strong>Funciones:</strong> ${product.specs.funciones}</li>
    <li><strong>Doble cara automática (Doble Faz):</strong> ${product.specs.dobleFaz}</li>
    <li><strong>Conectividad:</strong> ${product.specs.conectividad}</li>
    <li><strong>Velocidad:</strong> ${product.specs.velocidad}</li>
    <li><strong>Resolución:</strong> ${product.specs.resolucion}</li>
    <li><strong>Precio:</strong> ${product.price}</li>
  `;

  if (linkVolver) {
    linkVolver.href = product.linkVolver;
  }
}

/**
 * Muestra un mensaje de error en lugar del contenido
 */
function mostrarError(mensaje) {
  const main = document.querySelector('main');
  main.innerHTML = `
    <h2>${mensaje}</h2>
    <a href="../index.html" class="boton-vermas">← Volver al catálogo</a>
  `;
}

// Ejecutar función al cargar la página
window.addEventListener('DOMContentLoaded', cargarDetalleProducto);