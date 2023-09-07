function initTabNav() {
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
