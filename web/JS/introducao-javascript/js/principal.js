var titulo = document.querySelector("#titulo");
titulo.textContent = "Nutricionista Aparecida";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0 ; i < pacientes.length; i++) {
  var trPaciente = pacientes[i];

  var tdPeso = trPaciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  //Buscando Altura
  var tdAltura = trPaciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  //Buscando e calculando o IMC
  var tdImc = trPaciente.querySelector(".info-imc");

  var imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2);

  if (peso <= 0 || peso >= 200) {
    tdImc.textContent = "Peso Inválido!";
    trPaciente.classList.add("paciente-invalido")
    }

  if (altura <= 0 || altura >= 3.00) {
    tdImc.textContent = "Altura Inválida!";
    trPaciente.style.backgroundColor = "lightcoral";
  }
} 

titulo.addEventListener("click", function (){
  console.log("eu fui clicado!!!");

});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){

  event.preventDefault();
  
  var form = document.querySelector("#form-adicionar");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);


});