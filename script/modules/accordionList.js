export default class Accordion {
  constructor(list) {
    this.accordinList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }
  togleAccordion(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle(this.activeClass);
  }
  // adicionar os evnetos ao accordion
  addAccordionEvent() {
    this.accordinList.forEach((item) => {
      item.addEventListener("click", () => {
        this.togleAccordion(item);
      });
    });
  }
  // iniciar funcão
  init() {
    if (this.accordinList.length) {
      this.addAccordionEvent();
      // adicionar o primeiro item
      this.togleAccordion(this.accordinList[0]);
    }
    return this;
  }
}
