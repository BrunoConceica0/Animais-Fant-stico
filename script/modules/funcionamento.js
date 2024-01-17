export default class Funcionamento {
  constructor(funcionamento, activeCLass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeCLass = activeCLass;
  }

  dadosFuncinamento() {
    this.semana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horario = this.funcionamento.dataset.horario.split(",").map(Number);
  }
  dadosAgora() {
    this.dataAgora = new Date();
    this.dataSemana = this.dataAgora.getDay();
    this.dataHorario = this.dataAgora.getUTCHours() - 3;
  }
  estaAbreto() {
    this.semanaAberta = this.semana.indexOf(this.dataSemana) !== -1;
    this.horarioAberto =
      this.dataHorario >= this.horario[0] && this.dataHorario < this.horario[1];
    return this.semanaAberta && this.horarioAberto;
  }
  ativaAberto() {
    if (this.estaAbreto()) {
      this.funcionamento.classList.add(this.activeCLass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncinamento();
      this.ativaAberto();
    }
    return this;
  }
}
