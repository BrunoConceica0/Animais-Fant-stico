export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeTela = window.innerHeight * 0.6;
    this.windowScroll = this.windowScroll.bind(this);
  }
  windowScroll() {
    this.sections.forEach((section) => {
      const sectionsTop = section.getBoundingClientRect().top - this.metadeTela;
      if (sectionsTop < 0) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.windowScroll();
    window.addEventListener("scroll", this.windowScroll);
  }
}
