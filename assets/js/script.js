// Entrada Site

setTimeout(function () {
  var msg = document.getElementsByClassName("abertura");
  while (msg.length > 0) {
    msg[0].parentNode.removeChild(msg[0]);
  }
}, 4000);

//Popovers
$(function () {
  $('[data-toggle="popover"]').popover()
})


//Função Mudar Seta
let seta = document.getElementsByClassName("slick-prev");
function Seta() {
  seta.classList.remove("slick-prev:before");
  seta.classList.add("carousel-control-prev-icon");
}

//Catálogo Marcas
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

const modalMarcas = new bootstrap.Modal("#modalMarcas", {});
let i = 0;

const carouselMarcas = document.getElementById("carouselMarcasSlick");

//Gerar Carousel de Marcas
for (let empresa of Object.keys(marcas)) {
  let logo = document.createElement("span");
  logo.setAttribute("id", empresa);
  logo.innerHTML = `<img class="imgSlickMarcas" src="${marcas[empresa].img}">`;

//Modal de Marcas
  logo.addEventListener("click", function (event) {
    document
      .getElementById("modalMarcaImg")
      .setAttribute("src", marcas[event.currentTarget.id]["img"]);
    document.getElementById("modalMarcaLabel").innerHTML =
      marcas[event.currentTarget.id]["marca"];
    document.getElementById("modalMarcaDescription").innerHTML =
      marcas[event.currentTarget.id]["description"];
    document.getElementById("modalMarcaFundador").innerHTML =
      marcas[event.currentTarget.id]["fundador"];
    document.getElementById("modalMarcaAno").innerHTML =
      marcas[event.currentTarget.id]["ano"];
    document.getElementById("modalMarcaLocal").innerHTML =
      marcas[event.currentTarget.id]["local"];
    document.getElementById("modalMarcaEspecialidade").innerHTML =
      marcas[event.currentTarget.id]["especialidade"];
    document.getElementById("modalMarcaPatrocinio").innerHTML =
      marcas[event.currentTarget.id]["patrocinio"];
    document.getElementById("modalMarcaSite").innerHTML =
      marcas[event.currentTarget.id]["site"];
    modalMarcas.show();
  });
  carouselMarcas.appendChild(logo);
}

//Catálogo de Competições
class Compet {
  constructor(compet, loc, catego, edicao, etapas, jersey, mapa, id) {
    this.compet = compet;
    this.loc = loc;
    this.catego = catego;
    this.edicao = edicao;
    this.etapas = etapas;
    this.jersey = jersey;
    this.mapa = mapa;
    this.is = id;
  }
}

let compets = [
  new Compet(
    "Tour de France",
    "França",
    "Road Bike",
    "109",
    "21",
    "assets/img/competicoes/tour-de-france.jpg",
    "assets/img/competicoes/tour-de-france-map.jpg",
    "0"
  ),
  new Compet(
    `Giro D'Italia`,
    "Italia",
    "Road Bike",
    "105",
    "21",
    "assets/img/competicoes/giro-italia.jpg",
    "assets/img/competicoes/giro-italia-map.jpg",
    "1"
  ),
  new Compet(
    "La Vuelta",
    "Espanha",
    "Road Bike",
    "77",
    "21",
    "assets/img/competicoes/la-vuelta.jpg",
    "assets/img/competicoes/la-vuelta-map.jpg",
    "2"
  ),
  new Compet(
    "World Cup MTB",
    "Variável",
    "MTB",
    "32",
    "9",
    "assets/img/competicoes/uci-mtb-jersey.jpg",
    "",
    "3"
  ),
  new Compet(
    "Volta a Portugal",
    "Portugal",
    "Road Bike",
    "84",
    "11",
    "assets/img/competicoes/volta-portugal.jpg",
    "assets/img/competicoes/volta-portugal-map.jpg",
    "4"
  ),
  new Compet(
    "Deutshland Tour",
    "Alemanha",
    "Road Bike",
    "36",
    "4",
    "assets/img/competicoes/deutshland-tour.jpg",
    "assets/img/competicoes/deutshland-tour-map.jpg",
    "5"
  ),
];

const carouselCompeticoes = document.getElementById("carouselCompeticoes");
const modalCompets = new bootstrap.Modal("#modalCompets", {});

//Gerar Carousel de Competições
for (let compet of Object.keys(compets)) {
  let camisa = document.createElement("span");
  camisa.setAttribute("id", compet);
  camisa.innerHTML = `<img class="imgSlickCompets" src="${compets[compet].jersey}">`;
 
  //Modal de Competições
  camisa.addEventListener("click", function (event) {
    document
      .getElementById("modalCompetLabel")
      .setAttribute("src", compets[event.currentTarget.id]["jersey"]);
    document.getElementById("modalCompetCompet").innerHTML =
      compets[event.currentTarget.id]["compet"];
    document.getElementById("modalCompetLoc").innerHTML =
      compets[event.currentTarget.id]["loc"];
    document.getElementById("modalCompetCatego").innerHTML =
      compets[event.currentTarget.id]["catego"];
    document.getElementById("modalCompetEdicao").innerHTML =
      compets[event.currentTarget.id]["edicao"];
    document.getElementById("modalCompetEtapas").innerHTML =
      compets[event.currentTarget.id]["etapas"];
    document
      .getElementById("modalCompetMapa")
      .setAttribute("src", compets[event.currentTarget.id]["mapa"]);
    modalCompets.show();
  });
  carouselCompets.appendChild(camisa);  
}

//Carousel Slick (Marcas, Competições)
$(".carouselMarcasSlick, .carouselCompets").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});