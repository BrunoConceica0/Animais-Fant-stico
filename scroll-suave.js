const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

function scrollToSection(event) {
  event.preventDefault(event);
  const href = this.getAttribute("href"); 
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
