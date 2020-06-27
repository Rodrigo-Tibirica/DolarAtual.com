const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth();
const anoAtual = dataAtual.getFullYear();
const  dataInicio = `${anoAtual}-${mesAtual+1}-${diaAtual}`
const dataFinal = `${anoAtual}-${mesAtual+1}-${diaAtual-15}`

console.log(dataFinal);