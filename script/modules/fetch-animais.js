import AnimaNumero from "./numero.js";
export default function inintFetchAnimais() {
  const urlAnimais = "./animais.json";
  function createrAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3 class="texto">${animal.especie}</h3><span class="numero-detalhe" data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const numeroGrid = document.querySelector(".numero-grid");
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => {
        const divAnimal = createrAnimal(animal);
        numeroGrid.appendChild(divAnimal);
      });
      const animaNumero = new AnimaNumero();
      animaNumero.init();
    } catch {
      console.log(Error("Algum coisa deu errado!"));
    }
  }

  fetchAnimais(urlAnimais);
}
