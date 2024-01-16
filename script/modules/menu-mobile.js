import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {}
const menuMobile = document.querySelector('[data-menu="button"]');
const listaMenu = document.querySelector('[data-menu="lista"]');
// console.log(listaMenu);
const events = ["click", "touchstar"];

menuMobile.addEventListener("click", openMenu);
function openMenu() {
  listaMenu.classList.toggle("active");
  menuMobile.classList.toggle("active");
  outsideClick(menuMobile, events, () => {
    menuMobile.classList.remove("active");
    listaMenu.classList.remove("active");
  });
}
