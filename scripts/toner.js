/*
tarjetas de toner*/
const toners = [
  {
    name: "Tóner Alternativo Hp 85A",
    img: "https://http2.mlstatic.com/D_NQ_NP_958637-MLA41535934965_042020-O.webp",
    alt: "Tóner 85A para HP",
    link: "#",
    price: 9500,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 79A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 79A para HP",
    link: "#",
    price: 9000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Brother TN750",
    img: "https://http2.mlstatic.com/D_668323-MLA32407032384_102019-O.jpg",
    alt: "Tóner TN750 para Brother",
    link: "#",
    price: 16000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Brother TN450",
    img: "https://diamondsystemar.vtexassets.com/arquivos/ids/160293/4505129450_1.jpg?v=638544099229930000",
    alt: "Tóner TN450 para Brother",
    link: "#",
    price: 14500,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo  Brother TN660",
    img: "https://http2.mlstatic.com/D_NQ_NP_668107-MLA84477130829_052025-O.webp",
    alt: "Tóner TN660 para Brother",
    link: "#",
    price: 11000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp CF283A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 83A para HP",
    link: "#",
    price: 9000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp CF226A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGMWQ0arfGs0uoALLnFv2kV1E1zCfJfKC8A&s",
    alt: "Tóner 26A para HP",
    link: "#",
    price: 13500,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 78A",
    img: "https://www.powerprinter.com.ar/web2023/801-home_default/toner-hp-78a-ce278a-negro-alternativo-gneiss.jpg",
    alt: "Tóner 78A para HP",
    link: "#",
    price: 9200,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 12A",
    img: "https://www.soscomputacion.com.ar/26469/toner-alternativo-evertec-hp-12a-negro-hp-laserjet-1010-1012-1015-1018-1020-1022-1005-3015-3020-3030.jpg",
    alt: "Tóner 12A para HP",
    link: "#",
    price: 9000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo  Brother TN580",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXAq9CcDz7lcQhLXjQDWQq6VWFhE8paQ1uw&s",
    alt: "Tóner TN580 para Brother",
    link: "#",
    price: 16000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo  Brother TN880",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMHeLmiwPgA_GGhwNvlp7oz4R3-EqnOlLEQ&s",
    alt: "Tóner TN880 para Brother",
    link: "#",
    price: 16000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo  Brother TN1060",
    img: "https://axa.com.ar/webaxa/2995-home_default/toner-para-brother-tn-1060-alternativo.jpg",
    alt: "Tóner TN1060 para Brother",
    link: "#",
    price: 9000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo HP 105A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGOH-97PFdsyzaUWKs1m_ktul6h82EYwtyA&s",
    alt: "Tóner 105a para HP 105/107W",
    link: "#",
    price: 11000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Xerox 3020/25",
    img: "https://sistemasjunin.com.ar/wp-content/uploads/2024/10/pic_1586382744toner_xe.jpg",
    alt: "Tóner  3020/25 para xerox",
    link: "#",
    price: 15000,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Drum Alternativo Brother tn1060",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaFW4gJsIN8JLruMJNqUqDtB3Q-tdAkaukA&s",
    alt: "Drum Alternativo tn1060",
    link: "#",
    price: 9500,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Drum Alternativo Brother tn410",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757214-MLU78335534840_082024-T.webp",
    alt: "Drum Alternativo tn410",
    link: "#",
    price: 8700,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Drum Alternativo Brother tn580",
    img: "https://www.soscomputacion.com.ar/13798/toner-alternativo-para-brother-tn-600-2370-660-2320-2360-2540.jpg",
    alt: "Drum Alternativo tn580",
    link: "#",
    price: 13800,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Brother TN360",
    img: "https://bainformatica.com.ar/wp-content/uploads/2021/06/toner-alternativo-brother-tn360-1.jpg",
    alt: "Tóner Alternativo TN360",
    link: "#",
    price: 9700,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp CF210X",
    img: "https://http2.mlstatic.com/D_NQ_NP_751035-MLA54399323328_032023-O.webp",
    alt: "Tóner 210X para HP",
    link: "#",
    price: 12500,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 55A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100,
    deliveryfree: false,
    oferta: false,
  },
  {
    name: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100,
    deliveryfree: false,
    oferta: false,
  },
];

// Contenedor padre en el DOM para insertar las tarjetas
const listado = document.querySelector('.listadoToners'); // clase contenedor para los tóners

// Función para CREAR TARJETAS de tóners
function createTonerCard(toner) {
  const card = document.createElement('article');
  card.classList.add('card');

  const name = document.createElement('h4');
  name.textContent = toner.name;

  const img = document.createElement('img');
  img.src = toner.img;
  img.alt = toner.alt;
  img.style.width = '100%';
  img.style.borderRadius = '6px';

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = 'Precio: $' + toner.price.toLocaleString();

  const link = document.createElement('a');
  link.href = toner.link;
  link.target = '_blank';
  link.classList.add('boton-vermas');
  link.textContent = 'Ver más';

  const oferta = document.createElement('p');
  if (toner.oferta === true) {
    oferta.textContent = '¡Oferta disponible!';
    oferta.style.color = 'red';
    oferta.style.fontWeight = 'bold';
  }

  const envio = document.createElement('p');
  if (toner.deliveryfree === true) {
    envio.textContent = 'Envío gratis';
    envio.style.color = 'green';
  }

  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Agregar';
  botonComprar.classList.add('Agregar');
  // Aquí podés agregar eventListener para carrito en el futuro

  // Agrego los elementos al card (article)
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(price);
  card.appendChild(oferta);
  card.appendChild(envio);
  card.appendChild(link);
  card.appendChild(botonComprar);

  return card;
}

// Función para renderizar las tarjetas 
function renderTonerCards(tonersList) {
  
  // Limpio antes de agregar para evitar duplicados
  listado.innerHTML = '';
  tonersList.forEach(toner => {
    const card = createTonerCard(toner);
    listado.appendChild(card);
  });
}

// Renderizo los tóners hardcodeados inicialmente
renderTonerCards(toners);

// Función para obtener tóners desde Airtable
async function fetchTonersFromAirtable() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });

    const data = await response.json();

    // Mapear datos de Airtable al formato esperado
    const tonersList = data.records.map(record => ({
      name: record.fields.name,
      img: record.fields.img,
      alt: record.fields.alt,
      link: record.fields.link,
      price: record.fields.price,
      deliveryfree: record.fields.deliveryfree,
      oferta: record.fields.oferta
    }));

    // Renderizo tóners traídos de Airtable
    renderTonerCards(tonersList);
  } catch (error) {
    console.error("Error al obtener tóners desde Airtable:", error);
  }
}

// Llamamos a la función para traer datos desde Airtable
fetchTonersFromAirtable();