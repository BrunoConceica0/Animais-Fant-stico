// paramentros dos elementos, dos eventos de click e touchstar e o callback, para fazer o evento de bubble
export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  //conferindo se não existe o atributo, se não existir, executará o evento
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      html.addEventListener(userEvents, handleOutsideClick);
    });
    // atribuindo o difinição para que quando for clicado, o evento do click não aculumar
    element.setAttribute(outside, "");
  }
  // ao click para fora do elemento, o conteúdo vai sair
  function handleOutsideClick(event) {
    // se o elemento não conter o target do evento, a condição fará o conteúdo sair
    if (!element.contains(event.target)) {
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, handleOutsideClick);
      });
      element.removeAttribute(outside, "");
      callback();
    }
  }
}
