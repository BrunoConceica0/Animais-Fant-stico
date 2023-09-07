function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    function animacaoScroll() {
      sections.forEach((section) => {
        const metadeTela = window.innerHeight * 0.6;
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionInit = sectionTop - metadeTela < 0;
        if (isSectionInit) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animacaoScroll();

    window.addEventListener("scroll", animacaoScroll);
  }
}
initAnimacaoScroll();
