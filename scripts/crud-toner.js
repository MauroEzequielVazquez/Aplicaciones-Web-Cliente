const API_TOKEN ="pat2xiwj49oM4teRw.01c87e6aabfc9c2cf2d3673fe58a8faeb01007005e0f36d8b026b567aa58619b";
const BASE_ID = "appFi1FhfH9IQqyZc"; // ID real de tu base "catalogoToners"
const TABLE_NAME = "Toners"; // Nombre exacto de la tabla con T mayúscula
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;


const form = document.getElementById('formulario-producto');
const listaProductos = document.getElementById('lista-productos');

let toners = [];

// Cargar tóneres al inicio
fetchToner();

// Leer todos los tóneres
async function fetchToner() {
  try {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await res.json();
    toners = data.records.map(record => ({
      id: record.id,
      ...record.fields,
    }));
    renderToner();
  } catch (error) {
    console.error('Error obteniendo tóneres:', error);
  }
}

// Mostrar tóneres en pantalla
function renderToner() {
  listaProductos.innerHTML = '';
  toners.forEach(toner => {
    const div = document.createElement('div');
    div.className = 'producto';

    div.innerHTML = `
      <div>
        <strong>${toner.name}</strong> - $${toner.price || 0}
        ${toner.oferta ? '(Oferta)' : ''}
        ${toner.deliveryfree ? '(Envío Gratis)' : ''}
      </div>
      <div>
        <button onclick="editarToner('${toner.id}')">Editar</button>
        <button onclick="eliminarToner('${toner.id}')">Eliminar</button>
      </div>
    `;
    listaProductos.appendChild(div);
  });
}

// Submit del formulario (Crear o Editar)
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const toner = {
    name: document.getElementById('name').value,
    img: document.getElementById('img').value,
    alt: document.getElementById('alt').value,
    link: document.getElementById('link').value,
    price: parseFloat(document.getElementById('price').value),
    deliveryfree: document.getElementById('deliveryfree').checked,
    oferta: document.getElementById('oferta').checked,
  };

  const recordId = document.getElementById('recordId').value;

  if (recordId) {
    // Actualizar
    await updateToner(recordId, toner);
  } else {
    // Crear
    await createToner(toner);
  }

  form.reset();
  fetchToner();
});

// Crear tóner
async function createToner(toner) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          name: toner.name, 
          img: toner.img,
          alt: toner.alt,
          link: toner.link,
          price: toner.price,
          deliveryfree: toner.deliveryfree,
          oferta: toner.oferta,
        },
      }),
    });

    if (res.ok) alert('✅ Tóner creado');
    else alert('❌ Error al crear el tóner');
  } catch (err) {
    console.error(err);
  }
}

// Actualizar tóner
async function updateToner(recordId, toner) {
  try {
    const res = await fetch(`${API_URL}/${recordId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          name: toner.name,
          img: toner.img,
          alt: toner.alt,
          link: toner.link,
          price: toner.price,
          deliveryfree: toner.deliveryfree,
          oferta: toner.oferta,
        },
      }),
    });

    if (res.ok) alert('✅ Tóner actualizado');
    else alert('❌ Error al actualizar');
  } catch (err) {
    console.error(err);
  }
}

// Eliminar tóner
async function eliminarToner(recordId) {
  if (!confirm('¿Seguro que quieres eliminar este tóner?')) return;

  try {
    const res = await fetch(`${API_URL}/${recordId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    if (res.ok) {
      alert('🗑️ Tóner eliminado');
      fetchToner();
    } else {
      alert('❌ Error al eliminar');
    }
  } catch (err) {
    console.error(err);
  }
}

// Cargar datos para editar
window.editarToner = (recordId) => {
  const toner = toners.find(p => p.id === recordId);
  if (toner) {
    document.getElementById('recordId').value = toner.id;
    document.getElementById('name').value = toner.name;
    document.getElementById('img').value = toner.img?.[0]?.url || '';
    document.getElementById('alt').value = toner.alt;
    document.getElementById('link').value = toner.link;
    document.getElementById('price').value = toner.price;
    document.getElementById('deliveryfree').checked = toner.deliveryfree;
    document.getElementById('oferta').checked = toner.oferta;
  }
};

window.eliminarToner = eliminarToner;