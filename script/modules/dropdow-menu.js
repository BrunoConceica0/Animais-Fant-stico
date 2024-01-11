import outsideClick from "./outsideClick.js";
export default function initDropMenu() {
  const dropMenu = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  dropMenu.forEach((menu) => {
    ["click", "touchstar"].forEach((userEvents) => {
      menu.addEventListener(userEvents, handleClick);
    });
  });
}
