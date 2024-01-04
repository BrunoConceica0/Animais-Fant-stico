export default function iniTabNav() {
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const tabAnimais = document.querySelectorAll("[data-tab='menu'] li");
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const show = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", show);
  }
  // console.log(tabAnimais);
  if (tabAnimais && tabContent) {
    tabContent[0].classList.add("ativo");

    tabAnimais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
