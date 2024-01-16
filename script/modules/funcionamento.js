export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const semana = funcionamento.dataset.semana.split(",").map(Number);
const horario = funcionamento.dataset.horario.split(",").map(Number);
const dataAgora = new Date();
const dataSemana = dataAgora.getDay();
const dataHorario = dataAgora.getHours();
const semanaAberta = semana.indexOf(dataSemana) !== -1;
const horarioAberto = dataHorario >= horario[0] && dataHorario < horario[1];
if (semanaAberta && horarioAberto) {
  funcionamento.classList.add("open");
}
