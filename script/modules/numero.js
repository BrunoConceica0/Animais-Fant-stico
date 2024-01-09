export default class Numero {
  constructor(numeros, observaTarget, observaClasse) {
    this.numeros = document.querySelectorAll(numeros);
    this.observaClasse = observaClasse;
    this.observaTarget = document.querySelector(observaTarget);
    // bind o this do objeto da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }
  // Recebe um elemento do Dom com contexto com número em seu texto, incrementa a parti de 0  ate o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    let start = 0;
    const incremento = Math.floor(total / 100);
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // ativa incrementar número para cada número seleciondo do Dom
  animaisNumero() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }
  //funcao que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observaClasse)) {
      this.observa.disconnect();
      this.animaisNumero();
    }
  }
  // adiciona o mutation obsever para verificar quando a classe for ativo é adicionado a classeTarget
  addMutationObserve() {
    this.observa = new MutationObserver(this.handleMutation);
    this.observa.observe(this.observaTarget, { attributes: true });
  }
  init() {
    if (this.numeros && this.observaTarget) {
      this.addMutationObserve();
    }
    return this;
  }
}
