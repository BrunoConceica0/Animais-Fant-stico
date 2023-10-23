export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );
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
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
