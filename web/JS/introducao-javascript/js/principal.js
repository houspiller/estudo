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
  console.log("Sou um botao e fui clicado");

});