import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import inintDropDowMenu from "./modules/dropdow-menu.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/navegacao-por-tab.js";
import Accordion from "./modules/accordionList.js";
import initAnimacaoScroll from "./modules/animacaoAoScroll.js";
import inintFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSauve = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion(" [data-anime='acction'] dt");
scrollSauve.init();
accordion.init();
const tabNav = new TabNav(
  "[data-tab='content'] section",
  "[data-tab='menu'] li"
);
tabNav.init();
initModal();
initTooltip();
inintDropDowMenu();
initAnimacaoScroll();
inintFetchAnimais();
initFetchBitcoin();
// import $ from "jquery";
