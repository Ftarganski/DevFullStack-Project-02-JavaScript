const carouselSlick = document.getElementById("carouselSlick");

for (let empresa of Object.keys(marcas)) {
  let logo = document.createElement("div");
  logo.setAttribute("id", empresa);
  logo.innerHTML = `<span><img class="img-slick" src="${marcas[empresa].img}"></span>`;

  // todo: ESTÁ DANDO ERRO AO CHAMAR O MODAL NO SLICK
  logo.addEventListener("click", function (event) {
    document
      .getElementById("modalMarcaImg")
      .setAttribute("src", marcas[event.currentTarget.id][marcas[empresa].img]);

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

  carouselSlick.appendChild(logo);
}
