/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/modules/accordionList.js":
/*!*****************************************!*\
  !*** ./script/modules/accordionList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordinList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n  togleAccordion(item) {\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n    item.classList.toggle(this.activeClass);\r\n  }\r\n  // adicionar os evnetos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordinList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => {\r\n        this.togleAccordion(item);\r\n      });\r\n    });\r\n  }\r\n  // iniciar funcão\r\n  init() {\r\n    if (this.accordinList.length) {\r\n      this.addAccordionEvent();\r\n      // adicionar o primeiro item\r\n      this.togleAccordion(this.accordinList[0]);\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/accordionList.js?");

/***/ }),

/***/ "./script/modules/animacaoAoScroll.js":
/*!********************************************!*\
  !*** ./script/modules/animacaoAoScroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./script/modules/debounce.js\");\n\r\nclass AnimacaoScroll {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.metadeTela = window.innerHeight * 0.6;\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\r\n  }\r\n  // pega a distância em cada item em relação ao topo do site\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: offset - Math.floor(this.metadeTela),\r\n      };\r\n    });\r\n  }\r\n  // Verfica a distancia em cada objeto em relação ao scroll do site\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add(\"ativo\");\r\n      } else if (item.element.classList.contains(\"ativo\")) {\r\n        item.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  // windowScroll() {\r\n  //   this.sections.forEach((section) => {\r\n  //     const sectionTop = section.getBoundingClientRect().top - this.metadeTela;\r\n  //     if (sectionTop < 0) {\r\n  //       section.classList.add(\"ativo\");\r\n  //     } else {\r\n  //       section.classList.remove(\"ativo\");\r\n  //     }\r\n  //   });\r\n  // }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n    return this;\r\n  }\r\n  // remove o evento do scroll\r\n  stop() {\r\n    window.removeEventListener(\"scroll\", this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/animacaoAoScroll.js?");

/***/ }),

/***/ "./script/modules/debounce.js":
/*!************************************!*\
  !*** ./script/modules/debounce.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Debounce)\n/* harmony export */ });\nfunction Debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/debounce.js?");

/***/ }),

/***/ "./script/modules/dropdow-menu.js":
/*!****************************************!*\
  !*** ./script/modules/dropdow-menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./script/modules/outsideClick.js\");\n\r\nfunction initDropMenu() {\r\n  const dropMenu = document.querySelectorAll(\"[data-dropdown]\");\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.toggle(\"active\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  dropMenu.forEach((menu) => {\r\n    [\"click\", \"touchstar\"].forEach((userEvents) => {\r\n      menu.addEventListener(userEvents, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/dropdow-menu.js?");

/***/ }),

/***/ "./script/modules/fetch-animais.js":
/*!*****************************************!*\
  !*** ./script/modules/fetch-animais.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _numero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numero.js */ \"./script/modules/numero.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  //Cria a div contendo informação com o total de animais\r\n  function createrAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3 class=\"texto\">${animal.especie}</h3><span class=\"numero-detalhe\" data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n  // anima os números de cada animal\r\n  function animaisNumeros() {\r\n    const animaNumero = new _numero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    animaNumero.init();\r\n  }\r\n  // preenche cada animal no Dom\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createrAnimal(animal);\r\n    numeroGrid.appendChild(divAnimal);\r\n  }\r\n  const numeroGrid = document.querySelector(target);\r\n  // puxa os animais através de um arquivo json e cria cada animal creater animal\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fecht espera a resposta transforma a resposta em json\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJson = await animaisResponse.json();\r\n      // após a transformação de json, ativa as funções para preencher e animar os números\r\n      animaisJson.forEach((animal) => {\r\n        preencherAnimais(animal);\r\n        animaisNumeros();\r\n      });\r\n    } catch {\r\n      console.log(Error(\"Algum coisa deu errado!\"));\r\n    }\r\n  }\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/fetch-animais.js?");

/***/ }),

/***/ "./script/modules/fetch-bitcoin.js":
/*!*****************************************!*\
  !*** ./script/modules/fetch-bitcoin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((r) =>\r\n      r.json().then((btc) => {\r\n        const doe = document.querySelector(target);\r\n        doe.innerText = (100 / btc.BRL.sell).toFixed(4);\r\n      })\r\n    )\r\n    .catch(() => {\r\n      console.log(Error(\"Algum de errado\"));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./script/modules/modal.js":
/*!*********************************!*\
  !*** ./script/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(abrir, fechar, containerModal) {\r\n    this.abrir = document.querySelector(abrir);\r\n    this.fechar = document.querySelector(fechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n    //  bind  this ao callback para fazer referencia ao objeto da classe\r\n    this.eventToggoleModal = this.eventToggoleModal.bind(this);\r\n    this.containerModalClose = this.containerModalClose.bind(this);\r\n  }\r\n\r\n  // abri ou fecha o modal\r\n  abrirModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n  // adiconar o evento de toggle ao modal\r\n  eventToggoleModal(event) {\r\n    event.preventDefault();\r\n    this.abrirModal();\r\n  }\r\n  // fechar o modal\r\n  fecharModal() {\r\n    this.containerModal.classList.remove(\"ativo\");\r\n  }\r\n  // fechar o modal ao clicar para fora\r\n  containerModalClose(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.fecharModal(event);\r\n    }\r\n  }\r\n  addModalEvent() {\r\n    this.fechar.addEventListener(\"click\", this.eventToggoleModal);\r\n    this.abrir.addEventListener(\"click\", this.eventToggoleModal);\r\n    this.containerModal.addEventListener(\"click\", this.containerModalClose);\r\n  }\r\n  init() {\r\n    if (this.fechar && this.abrir && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/modal.js?");

/***/ }),

/***/ "./script/modules/navegacao-por-tab.js":
/*!*********************************************!*\
  !*** ./script/modules/navegacao-por-tab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabContent = document.querySelectorAll(menu);\r\n    this.tabAnimais = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const show = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, show);\r\n  }\r\n  // adiciona os eventos das tab\r\n  addTabNavEvent() {\r\n    this.tabAnimais.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        this.activeTab(index);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabAnimais.length && this.tabContent.length) {\r\n      // ative o primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/navegacao-por-tab.js?");

/***/ }),

/***/ "./script/modules/numero.js":
/*!**********************************!*\
  !*** ./script/modules/numero.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Numero)\n/* harmony export */ });\nclass Numero {\r\n  constructor(numeros, observaTarget, observaClasse) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observaClasse = observaClasse;\r\n    this.observaTarget = document.querySelector(observaTarget);\r\n    // bind o this do objeto da mutação\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n  // Recebe um elemento do Dom com contexto com número em seu texto, incrementa a parti de 0  ate o número final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    let start = 0;\r\n    const incremento = Math.floor(total / 100);\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n  // ativa incrementar número para cada número seleciondo do Dom\r\n  animaisNumero() {\r\n    this.numeros.forEach((numero) => {\r\n      this.constructor.incrementarNumero(numero);\r\n    });\r\n  }\r\n  //funcao que ocorre quando a mutação ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observaClasse)) {\r\n      this.observa.disconnect();\r\n      this.animaisNumero();\r\n    }\r\n  }\r\n  // adiciona o mutation obsever para verificar quando a classe for ativo é adicionado a classeTarget\r\n  addMutationObserve() {\r\n    this.observa = new MutationObserver(this.handleMutation);\r\n    this.observa.observe(this.observaTarget, { attributes: true });\r\n  }\r\n  init() {\r\n    if (this.numeros && this.observaTarget) {\r\n      this.addMutationObserve();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/numero.js?");

/***/ }),

/***/ "./script/modules/outsideClick.js":
/*!****************************************!*\
  !*** ./script/modules/outsideClick.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvents) => {\r\n      html.addEventListener(userEvents, handleOutsideClick);\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      events.forEach((userEvents) => {\r\n        html.removeEventListener(userEvents, handleOutsideClick);\r\n      });\r\n\r\n      element.removeAttribute(outside, \"\");\r\n\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/outsideClick.js?");

/***/ }),

/***/ "./script/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./script/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollSuave = this.scrollSuave.bind(this);\r\n  }\r\n\r\n  scrollSuave(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href).offsetTop;\r\n    window.scrollTo({ ...this.options, top: section });\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollSuave);\r\n    });\r\n  }\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/scroll-suave.js?");

/***/ }),

/***/ "./script/modules/tooltip.js":
/*!***********************************!*\
  !*** ./script/modules/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltip = document.querySelectorAll(tooltips);\r\n    // bind do objeto da classe aos callback\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  // cria a tooltip box e coloca no body\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n  //  mouse a tooltip com base em seus estilos de acordo com a direção do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 240}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n  // criar a tooltip e adiciona os eventos mousemove e mouseleave, ao target\r\n  onMouseOver(event) {\r\n    // cria um tooltipbox e coloca em uma propriedade\r\n    this.criarTooltipBox(event.currentTarget);\r\n\r\n    event.currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n    event.currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n  // Remove a tooltip e os eventos do mousemove e mouseleave\r\n\r\n  onMouseLeave(event) {\r\n    this.tooltipBox.remove();\r\n    event.currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    event.currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n//  adiciona os eventos do mouseouver a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltip.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltip.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/tooltip.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./script/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./script/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdow_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdow-menu.js */ \"./script/modules/dropdow-menu.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./script/modules/scroll-suave.js\");\n/* harmony import */ var _modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navegacao-por-tab.js */ \"./script/modules/navegacao-por-tab.js\");\n/* harmony import */ var _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordionList.js */ \"./script/modules/accordionList.js\");\n/* harmony import */ var _modules_animacaoAoScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animacaoAoScroll.js */ \"./script/modules/animacaoAoScroll.js\");\n/* harmony import */ var _modules_numero_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/numero.js */ \"./script/modules/numero.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./script/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./script/modules/fetch-animais.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSauve = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nconst accordion = new _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\" [data-anime='acction'] dt\");\r\nconst tabNav = new _modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  \"[data-tab='content'] section\",\r\n  \"[data-tab='menu'] li\"\r\n);\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"[data-modal='abrir']\",\r\n  \"[data-modal='fechar']\",\r\n  \"[data-modal='container']\"\r\n);\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-tooltip]\");\r\nconst animaNumero = new _modules_numero_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-numero]\", \".numero\", \"active\");\r\n\r\nconst animarScroll = new _modules_animacaoAoScroll_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-anime=\"scroll\"]');\r\n\r\nanimarScroll.init();\r\nanimaNumero.init();\r\ntooltip.init();\r\nmodal.init();\r\ntooltip.init();\r\ntabNav.init();\r\nscrollSauve.init();\r\naccordion.init();\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"../../animais.json\", \".numero-grid\");\r\n(0,_modules_dropdow_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\r\n// import $ from \"jquery\";\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;