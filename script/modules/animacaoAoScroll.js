export default function initAnimacaoScroll() {}
const sections = document.querySelectorAll('[data-anime="scroll"]');
window.addEventListener("scroll", windowScroll);

function windowScroll() {
  sections.forEach(section => {
    const metadeTela = window.innerHeight * 0.6;
    const sectionsTop = section.getBoundingClientRect().top - metadeTela;
    if (sectionsTop < 0)section.classList.add("ativo");else section.classList.remove("ativo");
  });
}
