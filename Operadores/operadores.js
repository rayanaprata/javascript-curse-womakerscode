// operadores aritmeticos

let num1 = 20;
let num2 = 10;

// adição + 

let totalAdicao = num1 + num2;
console.log(totalAdicao);
console.log("------------------------");

// subtração -
let totalSubtracao = num1 - num2;
console.log(totalSubtracao);
console.log("------------------------");

// multiplicação *

let totalMultiplicacao = num1 * num2;
console.log(totalMultiplicacao);
console.log("------------------------");

// divisão /

let totalDivisao = num1 / num2;
console.log(totalDivisao);
console.log("------------------------");

// resto da divisao Resto % (mod)

let restoDivisao = num1 % num2; //camel Case
console.log(restoDivisao);
console.log("------------------------");

// incremento ++

console.log(num1++); //acrescenta depois
console.log(++num1); //acrescenta antes
console.log("------------------------");

// decremento --

console.log(num2--); //acrescenta depois
console.log(--num2); //acrescenta antes
console.log("------------------------");



// operadores de comparação

// igual a ==

console.log(10 == 10); // true
console.log(10 == 9); // false
console.log("------------------------");

// diferente de !=

console.log(10 != 10); //false
console.log(10 != 9); // true
console.log("------------------------");

// maior que >

console.log(10 > 9); // true
console.log(9 > 10); // false
console.log("------------------------");

// menor que <

console.log(10 < 9); // false
console.log(9 < 10); // true
console.log("------------------------");

// maior igual a >=

console.log(10 >= 9); // true
console.log(9 >= 10); // false
console.log("------------------------");

// menor igual a <=

console.log(10 <= 9); //true
console.log(9 <= 10); //false
console.log("------------------------");

// valor e tipo igual a ===

console.log(10 === 10); // true
console.log(10 === 'Rayana'); // false 10 (number) é diferente de Rayana (string)
console.log("------------------------");



// operadores lógicos

// and && -> os dois valores comparados precisam ser verdadeiros para retornar true

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

console.log("------------------------");


// or || -> entre os valores comparados pelo menos um deles precisa ser verdadeiro para retornar true

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log("------------------------");

// não !

console.log(!true); // false
console.log(!false); // true

console.log("------------------------");
