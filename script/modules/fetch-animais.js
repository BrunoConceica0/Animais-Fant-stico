import AnimaNumero from "./numero.js";

export default function fetchAnimais(url, target) {
  //Cria a div contendo informação com o total de animais
  function createrAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3 class="texto">${animal.especie}</h3><span class="numero-detalhe" data-numero>${animal.total}</span>`;
    return div;
  }
  // anima os números de cada animal
  function animaisNumeros() {
    const animaNumero = new AnimaNumero();
    animaNumero.init();
  }
  // preenche cada animal no Dom
  function preencherAnimais(animal) {
    const divAnimal = createrAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }
  const numeroGrid = document.querySelector(target);
  // puxa os animais através de um arquivo json e cria cada animal creater animal
  async function criarAnimais() {
    try {
      // Fecht espera a resposta transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      // após a transformação de json, ativa as funções para preencher e animar os números
      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
        animaisNumeros();
      });
    } catch {
      console.log(Error("Algum coisa deu errado!"));
    }
  }
  return criarAnimais();
}
