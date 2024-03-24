const form = document.getElementById("formAction");
const imgApprove = '<img src="./images/aprovado.png" alt="homem feliz" />';
const imgReprove = '<img src="./images/reprovado.png" alt="homem triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class=" resultado aprovado ">Aprovado</span>';
const spanReprovado = '<span class=" resultado reprovado ">Reprovado</span>';
const notaMinina = parseFloat(prompt("Digite a nota minima"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLinha();
  atualizaTabela();
  somaMediafinal();
});

function addLinha() {
  const inputName = document.getElementById("nome-atividade");
  const inputNumber = document.getElementById("numero-atividade");

  if (atividade.includes(inputName.value)) {
    alert(`A atividade ${inputName.value} ja foi inserida`);
  } else {
    atividade.push(inputName.value);
    notas.push(parseFloat(inputNumber.value));

    let linha = "<tr>";
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += `<td>${
      inputNumber.value >= notaMinina ? imgApprove : imgReprove
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputName.value = "";
  inputNumber.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function somaMediafinal() {
  const mediaFinal = calculaMediafinal();

  document.getElementById("media_final").innerHTML = mediaFinal.toFixed(2);

  document.getElementById("media").innerHTML =
    mediaFinal >= notaMinina ? spanAprovado : spanReprovado;
}

function calculaMediafinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }
  return somaDasNotas / notas.length;
}
