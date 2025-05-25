/*
tarjetas de toner*/
const toners = [
  {
    title: "Tóner Alternativo 85A",
    img: "https://http2.mlstatic.com/D_NQ_NP_958637-MLA41535934965_042020-O.webp",
    alt: "Tóner 85A para HP",
    link: "#",
    price: 9500
  },
  {
    title: "Tóner Alternativo 79A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 79A para HP",
    link: "#",
    price: 8700
  },
  {
    title: "Tóner Alternativo TN750",
    img: "https://http2.mlstatic.com/D_668323-MLA32407032384_102019-O.jpg",
    alt: "Tóner TN750 para Brother",
    link: "#",
    price: 12000
  },
  {
    title: "Tóner Alternativo TN450",
    img: "https://diamondsystemar.vtexassets.com/arquivos/ids/160293/4505129450_1.jpg?v=638544099229930000",
    alt: "Tóner TN450 para Brother",
    link: "#",
    price: 10000
  },
  {
    title: "Tóner Alternativo TN660",
    img: "https://http2.mlstatic.com/D_NQ_NP_668107-MLA84477130829_052025-O.webp",
    alt: "Tóner TN660 para Brother",
    link: "#",
    price: 11000
  },
  {
    title: "Tóner Alternativo CF283A",
    img: "https://http2.mlstatic.com/D_NQ_NP_973244-MLA77095171285_062024-O.webp",
    alt: "Tóner 83A para HP",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo CF226A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGMWQ0arfGs0uoALLnFv2kV1E1zCfJfKC8A&s",
    alt: "Tóner 26A para HP",
    link: "#",
    price: 13500
  },
  {
    title: "Tóner Alternativo 78A",
    img: "https://www.powerprinter.com.ar/web2023/801-home_default/toner-hp-78a-ce278a-negro-alternativo-gneiss.jpg",
    alt: "Tóner 78A para HP",
    link: "#",
    price: 9200
  },
  {
    title: "Tóner Alternativo 12A",
    img: "https://www.soscomputacion.com.ar/26469/toner-alternativo-evertec-hp-12a-negro-hp-laserjet-1010-1012-1015-1018-1020-1022-1005-3015-3020-3030.jpg",
    alt: "Tóner 12A para HP",
    link: "#",
    price: 8500
  },
  {
    title: "Tóner Alternativo TN580",
    img: "https://diamondsystemar.vtexassets.com/arquivos/ids/160295-800-450?v=638544115572100000&width=800&height=450&aspect=true",
    alt: "Tóner TN580 para Brother",
    link: "#",
    price: 10500
  },
  {
    title: "Tóner Alternativo TN880",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMHeLmiwPgA_GGhwNvlp7oz4R3-EqnOlLEQ&s",
    alt: "Tóner TN880 para Brother",
    link: "#",
    price: 9800
  },
  {
    title: "Tóner Alternativo TN1060",
    img: "https://axa.com.ar/webaxa/2995-home_default/toner-para-brother-tn-1060-alternativo.jpg",
    alt: "Tóner TN1060 para Brother",
    link: "#",
    price: 9500
  },
  {
    title: "Tóner Alternativo HP 105A",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGOH-97PFdsyzaUWKs1m_ktul6h82EYwtyA&s",
    alt: "Tóner 105a para HP 105/107W",
    link: "#",
    price: 9300
  },
  {
    title: "Tóner Alternativo Xerox 3020/25",
    img: "https://sistemasjunin.com.ar/wp-content/uploads/2024/10/pic_1586382744toner_xe.jpg",
    alt: "Tóner  3020/25 para xerox",
    link: "#",
    price: 11500
  },
  {
    title: "Drum Alternativo tn1060",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaFW4gJsIN8JLruMJNqUqDtB3Q-tdAkaukA&s",
    alt: "Drum Alternativo tn1060",
    link: "#",
    price: 9500
  },
  {
    title: "Drum Alternativo tn410",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_757214-MLU78335534840_082024-T.webp",
    alt: "Drum Alternativo tn410",
    link: "#",
    price: 8700
  },
  {
    title: "Tóner Alternativo CF280A",
    img: "https://http2.mlstatic.com/D_NQ_NP_947315-MLA52936104875_122022-O.webp",
    alt: "Tóner 80A para HP",
    link: "#",
    price: 13800
  },
  {
    title: "Tóner Alternativo TN350",
    img: "https://http2.mlstatic.com/D_NQ_NP_898518-MLA44070652861_112020-O.webp",
    alt: "Tóner TN350 para Brother",
    link: "#",
    price: 9700
  },
  {
    title: "Tóner Alternativo CF210X",
    img: "https://http2.mlstatic.com/D_NQ_NP_751035-MLA54399323328_032023-O.webp",
    alt: "Tóner 210X para HP",
    link: "#",
    price: 12500
  },
  {
    title: "Tóner Alternativo 35A",
    img: "https://http2.mlstatic.com/D_NQ_NP_712149-MLA70399423949_072023-O.webp",
    alt: "Tóner 35A para HP",
    link: "#",
    price: 9100
  }
];


const listado = document.querySelector('.listadoToners');

toners.forEach(toner => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${toner.img}" alt="${toner.alt}" style="width:100%; border-radius:6px;" />
    <h3>${toner.title}</h3>
    <p><strong>Precio: </strong>$${toner.price.toLocaleString()}</p>
    <a href="${toner.link}" target="_blank" class="boton-vermas">Ver más</a>
  `;

  listado.appendChild(card);
});