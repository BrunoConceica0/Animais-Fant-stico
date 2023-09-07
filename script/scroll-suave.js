function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  if (linksInternos.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const sectionHref = document.querySelector(href);
      const topo = sectionHref.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: "smooth",
      });

      console.log(sectionHref);
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
initScrollSuave();
