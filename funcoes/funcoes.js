// Funções são responsáveis por executar determinadas tarefas

// Estrutura básica das funções:


// ==> Função Anônima

// ==> Exemplo 1
function mostrarMensagem() {
    return console.log('Parabéns! Você chegou ao final do treinamento de JavaScript');
}
mostrarMensagem(); //invocando a função
console.log('\n\n-------------\n');

// ==> Exemplo 2
function multiplarNumeros(numero1, numero2) {
    return numero1 * numero2;
}
let resultadoFinal = multiplarNumeros(3,2);
console.log(resultadoFinal);
console.log('\n\n-------------\n');

// ==> Exemplo 3

let numeros = [1,2,3,4,5,6,7,8,9,10];
let impares = [];

console.log('Imprimindo números ímpares: ');
function mostrarNumerosImpares() {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            console.log(numeros[i]);
            impares.push(numeros[i]);
        }
    }
}

mostrarNumerosImpares();
console.log(impares);

console.log('\n\n-------------\n');