export default function initAccordion() {
  const accordin = document.querySelectorAll(" [data-anime='acction'] dt");
  if (accordin.length) {
  }
  accordin[0].classList.add("ativo");
  accordin[0].nextElementSibling.classList.add("ativo");
  // ]

  function accordinList() {
    this.nextElementSibling.classList.toggle("ativo");
    this.classList.toggle("ativo");
  }

  accordin.forEach((item) => {
    item.addEventListener("click", accordinList);
  });
}
