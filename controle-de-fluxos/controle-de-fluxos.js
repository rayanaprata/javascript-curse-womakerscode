
// if-else

let maiorDeIdade = 18;

if (maiorDeIdade >= 18) {
  // condição será true
  console.log("É maior de idade.");
}

if (maiorDeIdade >= 18) {
  // condição será true
  console.log("É maior de idade.");
} else {
  // condição será falsa
  console.log("É menor de idade.");
}

// ------------------------
// operador condicional (ternário)   ? -> true     : -> false
let idade = 18;
let podeDirigir = idade > 18 ? 'sim' : 'não';

maiorDeIdade = idade >= 18 ? 'É maior' : 'É menor';

// ------------------------
// switch-case

let qualDataHoje = new Date();

switch (qualDataHoje.getDay()) {
  case 0:
    console.log("Hoje é Domingo.");
    break;

  case 1:
    console.log("Hoje é Segunda-Feira.");
    break;

  case 2:
    console.log("Hoje é Terça-Feira.");
    break;

  case 3:
    console.log("Hoje é Quarta-Feira.");
    break;

  case 4:
    console.log("Hoje é Quinta-Feira.");
    break;

  case 5:
    console.log("Hoje é Sexta-Feira.");
    break;

  case 6:
    console.log("Hoje é Sábado");
    break;

  default:
    console.log("Nenhuma data relacionada foi encontrada!");
    break;
}

// ------------------------
// while

/* let i=1;

while (i<10) { //condicao
  // bloco de código a ser executado
  console.log(i);
  i++; //i = i + 1;
}

i = 0;

do {
  // bloco de código a ser executado
  i = i + 1;
  console.log(i);
} while (i<10); //condicao */


// example while

let numeroInicial = 1;

while (numeroInicial <= 10) {
  console.log('O número é: ', numeroInicial);
  numeroInicial++;
}

// example do-while (sempre será executado, pelo menos uma vez!)

let initialNumber = 1;

do {
  console.log('Número do-while é: ', initialNumber);
  initialNumber++;
} while (initialNumber <= 10);

// laço for

/* for (declaracao 1; declaracao 2; declaracao 3) {
  // bloco de código a ser executado
} */

let numeros = [ 1, 2, 3 ];
for(let i=0; i<numeros.length; i++) {
  console.log('Número utilizando for: ', numeros[i]);
}

let frutas = [ "Maçã", "Banana", "Manga", "Morango", "Laranja", "Abacaxi" ];
for(let j=0; j<frutas.length; j++) {
  console.log('A fruta é: ', frutas[j]);
}