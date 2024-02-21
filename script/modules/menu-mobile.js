import outsideClick from "./outsideClick.js";
export default class MenuMobil {
  constructor(menuMobile, listaMenu, events) {
    this.menuMobile = document.querySelector(menuMobile);
    this.listaMenu = document.querySelector(listaMenu);
    this.activeClass = "active";
    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.listaMenu.classList.toggle(this.activeClass);
    this.menuMobile.classList.toggle(this.activeClass);
    outsideClick(this.menuMobile, this.events, () => {
      this.menuMobile.classList.remove(this.activeClass);
      this.listaMenu.classList.remove(this.activeClass);
    });
  }
  addMenuMobileEvent() {
    this.events.forEach((eventos) =>
      this.menuMobile.addEventListener(eventos, this.openMenu)
    );
  }
  init() {
    if (this.menuMobile && this.listaMenu) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
