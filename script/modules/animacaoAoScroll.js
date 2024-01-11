import Debounce from "./debounce.js";
export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.metadeTela = window.innerHeight * 0.6;
    this.checkDistance = Debounce(this.checkDistance.bind(this), 50);
  }
  // pega a distância em cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - Math.floor(this.metadeTela),
      };
    });
  }
  // Verfica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  // windowScroll() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top - this.metadeTela;
  //     if (sectionTop < 0) {
  //       section.classList.add("ativo");
  //     } else {
  //       section.classList.remove("ativo");
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
  // remove o evento do scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
