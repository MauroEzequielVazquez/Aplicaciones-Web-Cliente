const API_TOKEN = 'patoDnA94PcsyXfG8.20391abef63a0d69f6fc71858cdb1fc1e659873cbed9d9e3d833fe7d5b3bb0df'; // me lo da al crearlo, y darle permisos
const BASE_ID = 'app39tUWtvfGkwzJH'; //lo saco desde airtable, desde app..hasta Jh /app39tUWtvfGkwzJH/
const TABLE_NAME = 'Products';  // nombre que le puse a mi db
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`; //uso de backticks , NO son commilas simples
                                                           // es mas legible la interpolacion que la concatenacion de string
 



const products = [];

// Creamos una función para vincular con Airtable
const addToAirtable = async (product) => {
    
    const itemAirtable = {
        fields: product // En Airtable, los campos deben estar dentro de 'fields'
    };

    try {
        // Llamamos a la URL de Airtable, API_URL
        const response = await fetch(API_URL, {
            method: 'POST',  // Usamos POST porque vamos a INSERTAR
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,  // ES NECESARIO poner BEARER dentro de los famosos backticks seguido de la VARIABLE donde tenemos nuestro TOKEN
                'Content-Type': 'application/json'  // 2 HEADERS, Authorization y Content-Type
            },
            body: JSON.stringify(itemAirtable) // Convertimos a string, ya que el body debe ser texto plano
        });

        // Convertimos la respuesta a JSON
        const data = await response.json();
        console.log('✅ Producto agregado a Airtable:', data);
    } catch (error) {
        console.error('❌ Error al agregar el producto a Airtable:', error);
    }
};





const getProducts = async () => {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log('data', data);

    // Mapeamos los productos que vienen de Airtable
    const productsMapped = data.records.map(item => {
        return {
            title: item.fields.title,
            description: item.fields.description,
            thumbnail: item.fields.thumbnail,
            price: item.fields.price
        };
    });

    console.log(productsMapped);
    renderProducts(productsMapped);
};


getProducts();




function addProduct() {
    // esto esta hardocodeado, hacer formulario de alta
    const newProduct = {
        name: "Nuevo Producto",
        title: "Form Producto",
        description: "Descripción del nuevo producto",
        image: "./img/image-google.png",
        thumbnail: "./img/image-google.png",
        price: 20
    };

    // Insertarlo en airtable
    addToAirtable(newProduct);

    const card = createProductCard(newProduct);
    grid.appendChild(card);
}











                                                           

// async function getProductsFromAirtable() {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${API_TOKEN}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     const data = await response.json();

//     const productsMapped = data.records.map(record => ({
//       title: record.fields.name,
//       description: record.fields.description || '',
//       thumbnail: record.fields.img || '',
//       alt: record.fields.alt || 'Producto',
//       price: record.fields.price || 0,
//       deliveryfree: record.fields.deliveryfree || false,
//       oferta: record.fields.oferta || false,
//       link: record.fields.link || '#'
//     }));

//     renderProducts(productsMapped); // Usamos la función de impresoras.js

//   } catch (error) {
//     console.error('Error al traer productos de Airtable:', error);
//   }
// }

// window.addEventListener('DOMContentLoaded', getProductsFromAirtable);
