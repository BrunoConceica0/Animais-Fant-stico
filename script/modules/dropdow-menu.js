export default function inintDropDowMenu() {}
const dropDownMenu = document.querySelectorAll("[data-dropdown]");
function handleClick(event) {
  event.preventDefault(); // prevene que ao click acontece alguam coisa
  this.classList.add("active"); // acitve é do css para dar display:block; no submenu
  outisideClick(this, ["touchstart", "click"], () => {
    // crie um function detro da function
    this.classList.remove("active"); //  remove a classe do active para quando click, o evento ocorra apenas uma vez no site
  });
}
//   ["touchstart", "click"] são dois evento com o mesmo objecivo porem um pc pc e outro para smartfone
dropDownMenu.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function outisideClick(element, event, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside, "")) {
    event.forEach((userEvent) => {
      html.removeEventListener(userEvent, handleOutsideClick);
    });
    html.addEventListener("click", handleOutsideClick);
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleClick);
      callback();
    }
  }
}
