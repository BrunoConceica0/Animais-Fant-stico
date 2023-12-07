export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) =>
      r.json().then((btc) => {
        const doe = document.querySelector(".btc-preco");
        doe.innerText = (100 / btc.BRL.sell).toFixed(4);
      })
    )
    .catch(() => {
      console.log(Error("Algum de errado"));
    });
}
