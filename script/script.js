import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import inintDropDowMenu from "./modules/dropdow-menu.js";
import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/navegacao-por-tab.js";
import Accordion from "./modules/accordionList.js";
import initAnimacaoScroll from "./modules/animacaoAoScroll.js";
import AnimaNumero from "./modules/numero.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import fetchAnimais from "./modules/fetch-animais.js";

const scrollSauve = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion(" [data-anime='acction'] dt");
const tabNav = new TabNav(
  "[data-tab='content'] section",
  "[data-tab='menu'] li"
);
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
const tooltip = new Tooltip("[data-tooltip]");
const animaNumero = new AnimaNumero("[data-numero]", ".numero", "active");

animaNumero.init();
tooltip.init();
modal.init();
tooltip.init();
tabNav.init();
scrollSauve.init();
accordion.init();

fetchAnimais("../../animais.json", ".numero-grid");
inintDropDowMenu();
initAnimacaoScroll();
initFetchBitcoin();
// import $ from "jquery";
