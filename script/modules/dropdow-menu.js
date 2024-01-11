import outsideClick from "./outsideClick.js";
export default function initDropMenu() {
  const dropMenu = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    //  ["click", "touchstart"] são dois evento com o mesmo objecivo porem um pc pc e outro para smartfone
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }
  // adicionar forEach para cada elemento, usando um novo evento para todos
  dropMenu.forEach((menu) => {
    ["click", "touchstar"].forEach((userEvents) => {
      menu.addEventListener(userEvents, handleClick);
    });
  });
}
