export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function windowScroll() {
    sections.forEach((section) => {
      const metadeTela = window.innerHeight * 0.6;
      const sectionsTop = section.getBoundingClientRect().top - metadeTela;
      if (sectionsTop < 0) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  window.addEventListener("scroll", windowScroll);
}
