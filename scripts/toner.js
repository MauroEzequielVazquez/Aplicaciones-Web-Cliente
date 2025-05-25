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
    img: "https://http2.mlstatic.com/D_NQ_NP_719081-MLA53132433655_012023-O.webp",
    alt: "Tóner 83A para HP",
    link: "#",
    price: 9000
  },
  {
    title: "Tóner Alternativo CF226A",
    img: "https://http2.mlstatic.com/D_NQ_NP_858646-MLA44466228691_012021-O.webp",
    alt: "Tóner 26A para HP",
    link: "#",
    price: 13500
  },
  {
    title: "Tóner Alternativo 78A",
    img: "https://http2.mlstatic.com/D_NQ_NP_969314-MLA70399805811_072023-O.webp",
    alt: "Tóner 78A para HP",
    link: "#",
    price: 9200
  },
  {
    title: "Tóner Alternativo 12A",
    img: "https://http2.mlstatic.com/D_NQ_NP_708514-MLA44524829049_012021-O.webp",
    alt: "Tóner 12A para HP",
    link: "#",
    price: 8500
  },
  {
    title: "Tóner Alternativo TN2210",
    img: "https://http2.mlstatic.com/D_NQ_NP_938050-MLA44186761261_112020-O.webp",
    alt: "Tóner TN2210 para Brother",
    link: "#",
    price: 10500
  },
  {
    title: "Tóner Alternativo TN115",
    img: "https://http2.mlstatic.com/D_NQ_NP_942362-MLA45410225926_032021-O.webp",
    alt: "Tóner TN115 para Brother",
    link: "#",
    price: 9800
  },
  {
    title: "Tóner Alternativo TN1035",
    img: "https://http2.mlstatic.com/D_NQ_NP_981458-MLA52936185071_122022-O.webp",
    alt: "Tóner TN1035 para Brother",
    link: "#",
    price: 9500
  },
  {
    title: "Tóner Alternativo CF244A",
    img: "https://http2.mlstatic.com/D_NQ_NP_677518-MLA54477179809_032023-O.webp",
    alt: "Tóner 44A para HP",
    link: "#",
    price: 9300
  },
  {
    title: "Tóner Alternativo CF232A",
    img: "https://http2.mlstatic.com/D_NQ_NP_820384-MLA44418892029_122020-O.webp",
    alt: "Tóner CF232A Drum",
    link: "#",
    price: 11500
  },
  {
    title: "Tóner Alternativo CE285A",
    img: "https://http2.mlstatic.com/D_NQ_NP_620401-MLA44318297930_122020-O.webp",
    alt: "Tóner 85A Alternativo",
    link: "#",
    price: 9500
  },
  {
    title: "Tóner Alternativo CB436A",
    img: "https://http2.mlstatic.com/D_NQ_NP_801173-MLA70398978919_072023-O.webp",
    alt: "Tóner 36A para HP",
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