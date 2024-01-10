export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) =>
      r.json().then((btc) => {
        const doe = document.querySelector(target);
        doe.innerText = (100 / btc.BRL.sell).toFixed(4);
      })
    )
    .catch(() => {
      console.log(Error("Algum de errado"));
    });
}
