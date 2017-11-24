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

  var imc = calculaImc(peso,altura);
  tdImc.textContent = imc;

  if (!validaPeso(peso)) {
    tdImc.textContent = "Peso Inválido!";
    trPaciente.classList.add("paciente-invalido");
    }

  if (!validaAltura(altura)) {
    tdImc.textContent = "Altura Inválida!";
    trPaciente.style.backgroundColor = "lightcoral";
    trPaciente.classList.add("paciente-invalido");
  }
} 

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso>0 && peso<=400){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura>0 && altura<=3.00){
    return true;
  }else{
    return false;
  }
}