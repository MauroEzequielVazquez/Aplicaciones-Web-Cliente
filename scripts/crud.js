const API_TOKEN =
  "patNJ4WpU1pTMJAs0.21cf37035400de9bea5324d4d3aa30b3c3c235b8aa2d99926925bd7de5fa4ac1";
const BASE_ID = "appy5Akrxlk1wQUzj";
const TABLE_NAME = "tabla";
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

const form = document.getElementById("formulario-producto");
const listaProductos = document.getElementById("lista-productos");

let productos = [];

// Cargar productos al inicio
fetchProducts();

// Leer todos los productos
async function fetchProducts() {
  try {
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await res.json();
    productos = data.records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));
    renderProducts();
  } catch (error) {
    console.error("Error obteniendo productos:", error);
  }
}

// Mostrar productos en pantalla
function renderProducts() {
  listaProductos.innerHTML = "";
  productos.forEach((product) => {
    const div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `
      <div>
        <strong>${product.name}</strong> - $${product.price || 0}
        ${product.oferta ? "(Oferta)" : ""}
        ${product.deliveryfree ? "(Envío Gratis)" : ""}
      </div>
      <div>
        <button onclick="editarProducto('${product.id}')">Editar</button>
        <button onclick="eliminarProducto('${product.id}')">Eliminar</button>
      </div>
    `;
    listaProductos.appendChild(div);
  });
}

// Submit del formulario (Crear o Editar)
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const producto = {
    name: document.getElementById("name").value,
    img: document.getElementById("img").value,
    alt: document.getElementById("alt").value,
    price: parseFloat(document.getElementById("price").value),
    categoria: document.getElementById("categoria").value,
    type: document.getElementById("type").value,
    functions: document.getElementById("functions").value,
    duplex: document.getElementById("duplex").checked,
    speed: document.getElementById("speed").value,
    deliveryfree: document.getElementById("deliveryfree").checked,
    oferta: document.getElementById("oferta").checked,
  };

  const recordId = document.getElementById("recordId").value;

  if (recordId) {
    // Actualizar
    await updateProduct(recordId, producto);
  } else {
    // Crear
    await createProduct(producto);
  }

  form.reset();
  fetchProducts();
});

// Crear producto
async function createProduct(product) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          name: product.name,
          img: product.img,
          alt: product.alt,
          price: product.price,
          categoria: product.categoria,
          type: product.type,
          functions: product.functions,
          duplex: product.duplex,
          speed: product.speed,
          deliveryfree: product.deliveryfree,
          oferta: product.oferta,
        },
      }),
    });

    if (res.ok) alert("✅ Producto creado");
    else alert("❌ Error al crear el producto");
  } catch (err) {
    console.error(err);
  }
}

// Actualizar producto
async function updateProduct(recordId, product) {
  try {
    const res = await fetch(`${API_URL}/${recordId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          name: product.name,
          img: product.img,
          alt: product.alt,
          price: product.price,
          categoria: product.categoria,
          type: product.type,
          functions: product.functions,
          duplex: product.duplex,
          speed: product.speed,
          deliveryfree: product.deliveryfree,
          oferta: product.oferta,
        },
      }),
    });

    if (res.ok) alert("✅ Producto actualizado");
   else {
  const errorText = await res.text();
  console.error("❌ Error al actualizar:", errorText);
  alert("❌ Error al actualizar:\n" + errorText);
}
  } catch (err) {
    console.error(err);
  }
}

// Eliminar producto
async function eliminarProducto(recordId) {
  if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

  try {
    const res = await fetch(`${API_URL}/${recordId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    if (res.ok) {
      alert("🗑️ Producto eliminado");
      fetchProducts();
    } else {
      alert("❌ Error al eliminar");
    }
  } catch (err) {
    console.error(err);
  }
}

// Cargar datos para editar
window.editarProducto = (recordId) => {
  const prod = productos.find((p) => p.id === recordId);
  if (prod) {
    document.getElementById("recordId").value = prod.id;
    document.getElementById("name").value = prod.name;
    document.getElementById("img").value = prod.img[0]?.url || "";
    document.getElementById("alt").value = prod.alt;
    document.getElementById("price").value = prod.price;
    document.getElementById("deliveryfree").checked = prod.deliveryfree;
    document.getElementById("oferta").checked = prod.oferta;
    document.getElementById("categoria").value = prod.categoria || "";
    document.getElementById("type").value = prod.type || "";
    document.getElementById("functions").value = prod.functions || "";
    document.getElementById("duplex").checked = prod.duplex || false;
    document.getElementById("speed").value = prod.speed || "";
  }
};

window.eliminarProducto = eliminarProducto;
