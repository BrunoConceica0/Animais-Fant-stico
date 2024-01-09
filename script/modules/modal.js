export default class Modal {
  constructor(abrir, fechar, containerModal) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(containerModal);
    //  bind  this ao callback para fazer referencia ao objeto da classe
    this.eventToggoleModal = this.eventToggoleModal.bind(this);
    this.containerModalClose = this.containerModalClose.bind(this);
  }

  // abri ou fecha o modal
  abrirModal() {
    this.containerModal.classList.toggle("ativo");
  }
  // adiconar o evento de toggle ao modal
  eventToggoleModal(event) {
    event.preventDefault();
    this.abrirModal();
  }
  // fechar o modal
  fecharModal() {
    this.containerModal.classList.remove("ativo");
  }
  // fechar o modal ao clicar para fora
  containerModalClose(event) {
    if (event.target === this.containerModal) {
      this.fecharModal(event);
    }
  }
  addModalEvent() {
    this.fechar.addEventListener("click", this.eventToggoleModal);
    this.abrir.addEventListener("click", this.eventToggoleModal);
    this.containerModal.addEventListener("click", this.containerModalClose);
  }
  init() {
    if (this.fechar && this.abrir && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
