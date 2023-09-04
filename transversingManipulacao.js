// const h1 = document.querySelector("h1");
const descricao = document.querySelector(".animais-descricao");
// h1.innerHTML +="<p>Novo Titulo</p>";
// console.log(animaisLista.innerText);
const animais = document.querySelector(".animais");
const lista = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
// console.log(contato, tituloContato);
// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector("li:last-child"));
// console.log(lista.childNodes);

// animais.appendChild(tituloContato);
// contato.replaceChild(lista, tituloContato);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título";
// novoH1.classList.add(".titulo");
// console.log(novoH1);

// contato.appendChild(novoH1)
// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");
// const cloneH1 = h1.cloneNode(true);
// cloneH1.classList.add("azul");
// faq.appendChild(cloneH1);

// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");
copy.appendChild(cloneMenu);
console.log(menu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais
const html = document.Element;

faq.innerHTML = menu.innerHTML;
