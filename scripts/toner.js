/*
tarjetas de toner*/
const toners = [
  {
    title: "Tóner Alternativo Hp 85A",
    img: "https://http2.mlstatic.com/D_NQ_NP_958637-MLA41535934965_042020-O.webp",
    alt: "Tóner 85A para HP",
    link: "#",
    price: 9500
  },
  {
    title: "Tóner Alternativo Hp 79A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 79A para HP",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo Brother TN750",
    img: "https://http2.mlstatic.com/D_668323-MLA32407032384_102019-O.jpg",
    alt: "Tóner TN750 para Brother",
    link: "#",
    price: 16000
  },
  {
    title: "Tóner Alternativo Brother TN450",
    img: "https://diamondsystemar.vtexassets.com/arquivos/ids/160293/4505129450_1.jpg?v=638544099229930000",
    alt: "Tóner TN450 para Brother",
    link: "#",
    price: 14500
  },
  {
    title: "Tóner Alternativo  Brother TN660",
    img: "https://http2.mlstatic.com/D_NQ_NP_668107-MLA84477130829_052025-O.webp",
    alt: "Tóner TN660 para Brother",
    link: "#",
    price: 11000
  },
  {
    title: "Tóner Alternativo Hp CF283A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 83A para HP",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo Hp CF226A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGMWQ0arfGs0uoALLnFv2kV1E1zCfJfKC8A&s",
    alt: "Tóner 26A para HP",
    link: "#",
    price: 13500
  },
  {
    title: "Tóner Alternativo Hp 78A",
    img: "https://www.powerprinter.com.ar/web2023/801-home_default/toner-hp-78a-ce278a-negro-alternativo-gneiss.jpg",
    alt: "Tóner 78A para HP",
    link: "#",
    price: 9200
  },
  {
    title: "Tóner Alternativo Hp 12A",
    img: "https://www.soscomputacion.com.ar/26469/toner-alternativo-evertec-hp-12a-negro-hp-laserjet-1010-1012-1015-1018-1020-1022-1005-3015-3020-3030.jpg",
    alt: "Tóner 12A para HP",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo  Brother TN580",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXAq9CcDz7lcQhLXjQDWQq6VWFhE8paQ1uw&s",
    alt: "Tóner TN580 para Brother",
    link: "#",
    price: 16000
  },
  {
    title: "Tóner Alternativo  Brother TN880",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMHeLmiwPgA_GGhwNvlp7oz4R3-EqnOlLEQ&s",
    alt: "Tóner TN880 para Brother",
    link: "#",
    price: 16000
  },
  {
    title: "Tóner Alternativo  Brother TN1060",
    img: "https://axa.com.ar/webaxa/2995-home_default/toner-para-brother-tn-1060-alternativo.jpg",
    alt: "Tóner TN1060 para Brother",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo HP 105A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGOH-97PFdsyzaUWKs1m_ktul6h82EYwtyA&s",
    alt: "Tóner 105a para HP 105/107W",
    link: "#",
    price: 11000
  },
  {
    title: "Tóner Alternativo Xerox 3020/25",
    img: "https://sistemasjunin.com.ar/wp-content/uploads/2024/10/pic_1586382744toner_xe.jpg",
    alt: "Tóner  3020/25 para xerox",
    link: "#",
    price: 15000
  },
  {
    title: "Drum Alternativo Brother tn1060",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaFW4gJsIN8JLruMJNqUqDtB3Q-tdAkaukA&s",
    alt: "Drum Alternativo tn1060",
    link: "#",
    price: 9500
  },
  {
    title: "Drum Alternativo Brother tn410",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757214-MLU78335534840_082024-T.webp",
    alt: "Drum Alternativo tn410",
    link: "#",
    price: 8700
  },
  {
    title: "Drum Alternativo Brother tn580",
    img: "https://www.soscomputacion.com.ar/13798/toner-alternativo-para-brother-tn-600-2370-660-2320-2360-2540.jpg",
    alt: "Drum Alternativo tn580",
    link: "#",
    price: 13800
  },
  {
    title: "Tóner Alternativo Brother TN360",
    img: "https://bainformatica.com.ar/wp-content/uploads/2021/06/toner-alternativo-brother-tn360-1.jpg",
    alt: "Tóner Alternativo TN360",
    link: "#",
    price: 9700
  },
  {
    title: "Tóner Alternativo Hp CF210X",
    img: "https://http2.mlstatic.com/D_NQ_NP_751035-MLA54399323328_032023-O.webp",
    alt: "Tóner 210X para HP",
    link: "#",
    price: 12500
  },
  {
    title: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  },
   {
    title: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  },
   {
    title: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  }
  ,
   {
    title: "Tóner Alternativo Hp 55A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  }
  ,
   {
    title: "Tóner Alternativo Hp 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  }
  
  
  
];


const listado = document.querySelector('.listadoToners'); // Contenedor padre

function createTonerCard(toner) {
  const card = document.createElement('article');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = toner.img;
  img.alt = toner.alt;
  img.style.width = '100%';
  img.style.borderRadius = '6px';

  const title = document.createElement('h3');
  title.textContent = toner.title;

  const price = document.createElement('p');
  price.innerHTML = '<strong>Precio: </strong>$' + toner.price.toLocaleString();

  const link = document.createElement('a');
  link.href = toner.link;
  link.target = '_blank';
  link.classList.add('boton-vermas');
  link.textContent = 'Ver más';

  // Agregar todos los elementos al article
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(link);

  return card;
}

// Recorremos el array y creamos las tarjetas
toners.forEach(toner => {
  const card = createTonerCard(toner);
  listado.appendChild(card);
});














//filtros


const inputNombre = document.querySelector('#busqueda');
const inputPrecioMax = document.querySelector('#precio-max');
const inputPrecioMin = document.querySelector('#precio-min');
inputNombre.addEventListener("input", aplicarFiltros);






// función para mostrar solo los productos filtrados

function aplicarFiltros() {
  const texto = inputNombre.value.toLowerCase();
  const precioMin = parseInt(inputPrecioMin.value) || 0;
  const precioMax = parseInt(inputPrecioMax.value) || Infinity;

  listado.innerHTML = '';

  const productosFiltrados = toners.filter(toner => {
    const coincideNombre = toner.title.toLowerCase().includes(texto);
    const coincidePrecio = toner.price >= precioMin && toner.price <= precioMax;

    return coincideNombre && coincidePrecio;
  });

  if (productosFiltrados.length === 0) {
    listado.innerHTML = '<p>No se encontraron productos, por favor vuelva a intentar.</p>';
    return;
  }

  productosFiltrados.forEach(toner => {
    const card = createTonerCard(toner);
    listado.appendChild(card);
  });
}
