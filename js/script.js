function calcularIMC() {
  var nome = document.getElementById('nome').value;
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Por favor, digite valores válidos para peso e altura.');
    document.getElementById('nome').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    return;
  }

  var imc = peso / (altura * altura);

  var resultadoElement = document.getElementById('resultado');
  var resultadoTextElement = document.getElementById('resultadoText');

  resultadoElement.innerHTML = `Olá ${nome}, Seu IMC é: ${imc.toFixed(2)}`;

  if (imc <= 18.5) {
    resultadoTextElement.innerHTML = `Você está abaixo do peso.`;
  } else if (imc <= 24.9) {
    resultadoTextElement.innerHTML = `Seu peso está dentro da faixa normal.`;
  } else if (imc <= 29.9) {
    resultadoTextElement.innerHTML = `Você está com sobrepeso.`;
  } else if (imc <= 34.9) {
    resultadoTextElement.innerHTML = `Você está no estágio de obesidade I.`;
  } else if (imc <= 39.9) {
    resultadoTextElement.innerHTML = `Você está no estágio de obesidade II.`;
  } else {
    resultadoTextElement.innerHTML = `Você está no estágio de obesidade III.`;
  }
}
