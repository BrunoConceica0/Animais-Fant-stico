export default function initNumero() {
  function animaisNumero() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observa;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains(".active")) {
      observa.disconnect();
      animaisNumero();
    }
  }
  observa = new MutationObserver(handleMutation);

  const observaTarget = document.querySelector(".numero");
  observa.observe(observaTarget, { attributes: true });
}
