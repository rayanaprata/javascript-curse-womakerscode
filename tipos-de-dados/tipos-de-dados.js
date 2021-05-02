// Strings - dados textuais

/*
 *  'Olá'
 *  "Olá"
 *  `Olá`
*/

let nome = 'Rayana';
let nomeMae = "Liliane";
let familia = `Eu me chamo ${nome} e o nome da minha mãe é ${nomeMae}`;

console.log(familia);

console.log("------------------------");

// Number - qualquer tipo de número, inteiros ou decimais, etc

const num1 = 4;
const num2 = 3.99;
const num3 = 3e5; // 3 * 10^5

console.log(num1, num2, num3);

console.log("------------------------");

// Boolean - true or false

let x = 5;
let y = 5;
let z = 6;

console.log((x == y)); //true 
console.log((x == z)); // false

console.log("------------------------");

// Symbol - identificar dados exclusivos

// Object

// muito utilizado em qualquer instancia no javascript, tanto no backend quanto no frontend
// tipo object representa um objeto, tudo que existe no mundo real é representado neste tipo

const estudante = {
    nome: 'Rayana',
    sobrenome: 'Prata',
    idade: 20,
    tipoCurso: 'Javascript',
    valorCurso: 25.00,
    ativo: true
};

console.log(estudante);

console.log("------------------------");

// Undefined - tipo de dado cujo a variável não foi inicializada

let varUndefined;

console.log(varUndefined); // retorna undefined pois a variável foi declarada e nenhum valor foi atribuído a ela

console.log("------------------------");

// Null - nulos

const numero = null;
console.log(numero); // retorna null

console.log("------------------------");

// BigInt - números muito compridos

const val1 = 91684326842364545364854654895845484n; //retratado com um "n" no final

console.log(val1); //se imprimir typeof <nomeVar> ele retorn o tipo de dado!