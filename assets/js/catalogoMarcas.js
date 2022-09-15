let i = 0;

for (let marca of Object.keys(marcas)) {
  let div = document.createElement("div");
  div.setAttribute("id", marca);
  div.classList.add("carousel-item", "carousel-mod-item");
  if (i === 0) {
    div.classList.add("active");
  }
  i++;
  div.innerHTML = `<span><img class="img-carousel-base" src="${marcas[marca]["img"]}"></span>`;

  div.addEventListener("click", function (event) {
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

  carouselMarcaItems.appendChild(div);
}

