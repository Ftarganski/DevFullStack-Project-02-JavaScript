const carouselMarcaItems = document.getElementById("carouselMarcaItems");
const modalMarcas = new bootstrap.Modal("#modalMarcas", {});

const marcas = {
  bianchi: {
    img: "assets/img/marcas/bianchi.jpg",
    marca: "Bianchi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Edoardo Bianchi",
    ano: "1885",
    local: "Via Nirone,Itália",
    especialidade: "Road Bikes + MTB",
    patrocinio: "Team Jumbo-Visma",
    site: `<a href="http://www.bianchi.com" class="modal-link" target="blank">bianchi.com</a>`,
  },
  bmc: {
    img: "assets/img/marcas/bmc.jpg",
    marca: "BMC Switzerland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Bob Bigelow",
    ano: "1986",
    local: "Grenchen, Suíça",
    especialidade: "Road Bikes",
    patrocinio: "BMC Racing Team",
    site: `<a href="http://www.bmc-switzerland.com" class="modal-link" target="blank">bmc-switzerland.com</a>`,
  },
  cannondale: {
    img: "assets/img/marcas/cannondale.jpg",
    marca: "Cannondale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Joe Montgomery + Murdock MacGregor",
    ano: "1971",
    local: "Wilton, Estados Unidos",
    especialidade: "Road Bikes + MTB",
    patrocinio: "EF Education - Nippo",
    site: `<a href="https://www.cannondale.com" class="modal-link" target="blank">cannondale.com</a>`,
    },
  cervelo: {
    img: "assets/img/marcas/cervelo.jpg",
    marca: "Cervélo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Gerard Vroomen + Phil White",
    ano: "1995",
    local: "Santa Cruz, Estados Unidos",
    especialidade: "Road Bikes",
    patrocinio: "Team Jumbo-Visma",
    site: `<a href="https://www.cervelo.com" class="modal-link" target="blank">cervelo.com</a>`,
  },
  colnago: {
    img: "assets/img/marcas/colnago.jpg",
    marca: "Colnago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Ernesto Colnago",
    ano: "1952",
    local: "Cambiago, Itália",
    especialidade: "Road Bikes",
    patrocinio: "UAE Team Emirates",
    site: `<a href="https://www.colnago.com" class="modal-link" target="blank">colnago.com</a>`,
    },
  merida: {
    img: "assets/img/marcas/merida.jpg",
    marca: "Merida",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Ike Tseng",
    ano: "1972",
    local: "Taiwan City, Taiwan",
    especialidade: "Road Bikes",
    patrocinio: "Multivan Merida Biking Team",
    site: `<a href="https://www.merida-bikes.com" class="modal-link" target="blank">merida-bikes.com</a>`,
   },
  orbea: {
    img: "assets/img/marcas/orbea.jpg",
    marca: "Orbea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Juan Manuel Orbea + Mateo Orbea + Casimiro Orbea",
    ano: "1840",
    local: "Mallabia, Espanha",
    especialidade: "Road Bikes",
    patrocinio: "Euskaltel–Euskadi",
    site: `<a href="https://www.orbea.com" class="modal-link" target="blank">orbea.com</a>`,
  },
  raleigh: {
    img: "assets/img/marcas/raleigh.jpg",
    marca: "Raleigh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "	Frank Bowden + Richard Woodhead + Paul Angois",
    ano: "1888",
    local: "Eastwood, Inglaterra",
    especialidade: "MTB",
    patrocinio: "---",
    site: `<a href="https://www.raleigh.co.uk" class="modal-link" target="blank">raleigh.co.uk</a>`,
  },
  trek: {
    img: "assets/img/marcas/trek.jpg",
    marca: "Trek",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc libero, tristique in enim nec, suscipit aliquet velit.",
    fundador: "Dick Burke + Bevil Hogg",
    ano: "1975",
    local: "Waterloo, Estados Unidos",
    especialidade: "Road Bikes + MTB",
    patrocinio: "Trek-Segafredo",
    site: `<a href="https://www.trekbikes.com" class="modal-link" target="blank">trekbikes.com</a>`,
  },
};
