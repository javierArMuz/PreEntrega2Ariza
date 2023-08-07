const products = [
  {
    "id": "1",
    "title": "Piano Yamaha",
    "description": "PSR E473",
    "image": "https://belmusic.com.co/wp-content/uploads/2022/05/Yamaha-PSR-E473-imagen-1.jpg",
    "price": 390.46,
    "stock": 3,
    "category": 'Pianos'
  },
  {
    "id": "2",
    "title": "Teclado Casio",
    "description": "CT-S100",
    "image": "https://tmsmusic.co/cdn/shop/products/4c7c6cef-09de-4174-8be1-0c6bc708eed0.jpg?v=1687880897&width=1090",
    "price": 150.67,
    "stock": 6,
    "category": 'Pianos'
  },
  {
    "id": "3",
    "title": "Piano D Roland",
    "description": "FP-30X",
    "image": "https://www.pianosbogota.com/wp-content/uploads/2020/02/PIANO-DIGITAL-ROLAND-FP-30-bogota.jpg",
    "price": 1110.36,
    "stock": 3,
    "category": 'Pianos'
  },
  {
    "id": "4",
    "title": "Guitarra electroacustica",
    "description": "de nylon sdc",
    "image": "https://image.cdn1.buscalibre.com/3549458.__RS360x360__.jpg",
    "price": 366.05,
    "stock": 6,
    "category": 'Guitarras'
  },
  {
    "id": "5",
    "title": "Guitarra eléctrica",
    "description": "Yamaha PAC 112",
    "image": "https://tutempo.com.co/wp-content/uploads/2020/04/Yamaha-PAC-112-diag.png",
    "price": 292.84,
    "stock": 6,
    "category": 'Guitarras'
  },
  {
    "id": "6",
    "title": "Guitarra Acústica",
    "description": "Epiphone Ppag",
    "image": "https://cdn.shopify.com/s/files/1/0512/9116/0767/products/static.gibson.com_product-images_Epiphone_EPIX2D662_Natural_500-500.png?v=1667588171",
    "price": 207.43,
    "stock": 4,
    "category": 'Guitarras'
  },
  {
    "id": "7",
    "title": "Bajo electrico milestone",
    "description": "5 cuerdas Negro Peavey",
    "image": "https://tecnicalmusic.com/wp-content/uploads/2021/02/Bajo-Electrico-Milestone-5-cuerdas-Negro-Peavey.jpg",
    "price": 317.25,
    "stock": 3,
    "category": 'Bajos'
  },
  {
    "id": "8",
    "title": "Bajo eléctrico Ibanez",
    "description": "6 cuerdas GSR206B-WNF",
    "image": "https://duosonic.co/wp-content/uploads/2022/10/BAJO-ELECTRICO-6-CUERDAS-IBANEZ-GSR206B-WNF-Duosonic-Bogota.webp",
    "price": 341.65,
    "stock": 3,
    "category": 'Bajos'
  },
  {
    "id": "9",
    "title": "Batería acústica Yamaha",
    "description": "RDP2F5 (5 Piezas)",
    "image": "https://belmusic.com.co/wp-content/uploads/2019/03/RDP2f5-imagen-1.jpg",
    "price": 146.42,
    "stock": 2,
    "category": 'Baterías'
  },
  {
    "id": "10",
    "title": "Batería Electrónica",
    "description": "CARLSBRO ROCK 50",
    "image": "https://www.pianosbogota.com/wp-content/uploads/2020/11/MODULO-BATERIA-ELECTRONICA-CARLSBRO-ROCK-50-002.jpg",
    "price": 170.82,
    "stock": 2,
    "category": 'Baterías'
  },
  {
    "id": "11",
    "title": "Saxofón Tenor",
    "description": "Conn tS651DIR",
    "image": "https://cdn.shopify.com/s/files/1/2235/9983/products/VG4942_-_SAXOFON_TENOR_TS651_-_FRONTAL_copia_960x.jpg?v=1501976099",
    "price": 1448.57,
    "stock": 4,
    "category": 'Saxofónes'
  },
  {
    "id": "12",
    "title": "Saxo Alto",
    "description": "J.Michael 800 B",
    "image": "https://www.instrumentomania.com/4851-large_default/saxo-alto-jmichael-800-b.jpg",
    "price": 1586.23,
    "stock": 4,
    "category": 'Saxofónes'
  },
  {
    "id": "13",
    "title": "Micrófono Shure",
    "description": "SM58-LC",
    "image": "https://cdn.shopify.com/s/files/1/0269/4178/4117/products/MIC014_800x800.png?v=1576616415",
    "price": 146.42,
    "stock": 7,
    "category": 'Micrófonos'
  },
  {
    "id": "14",
    "title": "Micrófono Condensador",
    "description": "K440BLACK Vento",
    "image": "https://www.sonomarcas.com/wp-content/uploads/2021/05/Microfono-de-condensador-Vento-K440.jpg",
    "price": 158.62,
    "stock": 7,
    "category": 'Micrófonos'
  },
  {
    "id": "15",
    "title": "Consola Pasiva",
    "description": "Gemini 12 C",
    "image": "https://http2.mlstatic.com/D_NQ_NP_711111-MLV49871976528_052022-O.webp",
    "price": 119.58,
    "stock": 3,
    "category": 'Consolas'
  },
  {
    "id": "16",
    "title": "Consola Ital",
    "description": "DJ 8FX Pasiva",
    "image": "https://centrodelsonido.net/wp-content/uploads/2022/03/consola-analoga-prodj-8fx1.jpg",
    "price": 236.71,
    "stock": 2,
    "category": 'Consolas'
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500);
  })
}

export const getProductById = (prodId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === prodId))
    }, 500);
  })
}

export const getProducstByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 500);
  })
}