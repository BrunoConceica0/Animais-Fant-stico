export default function iniTabNav() {
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const tabAnimais = document.querySelectorAll("[data-tab='menu'] li");
  // console.log(tabAnimais);
  if (tabAnimais && tabContent) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const show = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", show);
    }

    tabAnimais.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
