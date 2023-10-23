export default function initModal() {
  const fechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  const abrir = document.querySelector("[data-modal='abrir']");
  if (fechar && abrir && containerModal) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }
    abrir.addEventListener("click", abrirModal);

    function fecharModal() {
      containerModal.classList.remove("ativo");
    }
    fechar.addEventListener("click", fecharModal);

    function containerModalClose(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }
    containerModal.addEventListener("click", containerModalClose);
  }
}
