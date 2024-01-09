export default class TabNav {
  constructor(menu, content) {
    this.tabContent = document.querySelectorAll(menu);
    this.tabAnimais = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const show = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, show);
  }
  // adiciona os eventos das tab
  addTabNavEvent() {
    this.tabAnimais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabAnimais.length && this.tabContent.length) {
      // ative o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
