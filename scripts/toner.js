// Datos necesarios para la conexión con Airtable
const API_TOKEN = 'pat2xiwj49oM4teRw.01c87e6aabfc9c2cf2d3673fe58a8faeb01007005e0f36d8b026b567aa58619b';
const BASE_ID = 'appFi1FhfH9IQqyZc'; // ID real de tu base "catalogoToners"
const TABLE_NAME = 'Toners'; // Nombre exacto de la tabla con T mayúscula
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

// Variable para almacenar los datos
let toners = [];

// Contenedor padre en el DOM para insertar las tarjetas
const listado = document.querySelector('.listadoToners');

// Función para crear una tarjeta de toner
function createTonerCard(toner) {
  const card = document.createElement('article');
  card.classList.add('card');

  const name = document.createElement('h4');
  name.textContent = toner.name || 'Sin nombre';

  const img = document.createElement('img');
  img.src = toner.img || 'https://via.placeholder.com/150';
  img.alt = toner.alt || 'Imagen de tóner';
  img.style.width = '100%';
  img.style.borderRadius = '6px';

  const price = document.createElement('p');
  price.classList.add('price');
  if (typeof toner.price === 'number') {
    price.textContent = 'Precio: $' + toner.price.toLocaleString();
  } else {
    price.textContent = 'Precio no disponible';
  }

  const link = document.createElement('a');
  link.href = toner.link || '#';
  link.target = '_blank';
  link.classList.add('boton-vermas');
  link.textContent = 'Ver más';

  const oferta = document.createElement('p');
  if (toner.oferta === true) {
    oferta.textContent = '¡Oferta disponible!';
    oferta.style.color = 'red';
    oferta.style.fontWeight = 'bold';
    card.appendChild(oferta);
  }

  const envio = document.createElement('p');
  if (toner.deliveryfree === true) {
    envio.textContent = 'Envío gratis';
    envio.style.color = 'green';
    card.appendChild(envio);
  }

  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Agregar';
  botonComprar.classList.add('Agregar');

  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(link);
  card.appendChild(botonComprar);

  return card;
}

// Función para renderizar las tarjetas
function renderTonerCards(tonersList) {
  listado.innerHTML = '';
  tonersList.forEach(toner => {
    const card = createTonerCard(toner);
    listado.appendChild(card);
  });
}

// Función para obtener los datos desde Airtable
async function fetchTonersFromAirtable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    const tonersList = data.records.map(record => ({
      name: record.fields.name,
      img: record.fields.img,
      alt: record.fields.alt,
      link: record.fields.link,
      price: record.fields.price,
      deliveryfree: record.fields.deliveryfree,
      oferta: record.fields.oferta
    }));

    console.log(tonersList); // 👉 Te ayuda a ver si algún price viene undefined
    renderTonerCards(tonersList);
  } catch (error) {
    console.error("Error al obtener tóners desde Airtable:", error);
  }
}

// Llamada a la función al cargar
fetchTonersFromAirtable();









 // FUNCIÓN para agregar una tarjeta visual al carrito

const listaAgregados = document.getElementById('lista-agregados');

function agregarAlListado(producto) {
  const li = document.createElement('li');
  li.classList.add('card');

  // img del producto
  const img = document.createElement('img');
  img.src = producto.img;
  img.alt = producto.alt;
  img.style.width = '100px'; // Podés ajustar a gusto

  // nombre del producto
  const name = document.createElement('h4');
  name.textContent = producto.name;

  li.appendChild(img);
  li.appendChild(name);

  listaAgregados.appendChild(li);
}


//func para vaciar carrito
const btnVaciarCarrito = document.getElementById('btn-vaciar-carrito');
const listaAgregado = document.getElementById('lista-agregados');

btnVaciarCarrito.addEventListener('click', () => {
  listaAgregados.innerHTML = ''; // limpia todo el contenido del carrito
});

btnVaciarCarrito.addEventListener('click', () => {
  listaAgregados.innerHTML = ''; // limpia todo el contenido del carrito
});


//Carrito de compras
const botonToggle = document.getElementById('toggle-carrito');
const carrito = document.getElementById('carrito');

botonToggle.addEventListener('click', () => {
  carrito.classList.toggle('visible'); // solo una clase para mostrar/ocultar
});










