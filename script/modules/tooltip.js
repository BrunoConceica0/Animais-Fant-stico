export default class Tooltip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);
    // bind do objeto da classe aos callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  //  mouse a tooltip com base em seus estilos de acordo com a direção do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 240}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }
  // criar a tooltip e adiciona os eventos mousemove e mouseleave, ao target
  onMouseOver(event) {
    // cria um tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }
  // Remove a tooltip e os eventos do mousemove e mouseleave

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }
//  adiciona os eventos do mouseouver a cada tooltip
  addTooltipsEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
