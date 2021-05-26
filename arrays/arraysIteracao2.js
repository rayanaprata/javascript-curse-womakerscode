// forEach();   -> chama uma função de retorno uma vez para cada elemento de um array
// map();    -> cria uma nova matriz executando uma função em cada elemento de um array, ele não executa função para elementos de um array sem valores
// filter();   cria um novo array que foi passado num teste
// reduce();   reduz a execução de uma função em cada elemento da matriz, para produzir ou reduzir a um único valor
// every();    método que verifca se todos os valores do array passam num teste
// verifica se alguns valores do array passam no teste
// find(); retorna o primeiro elemento do array/matriz que passar num teste
// findIndex();  retorna o index do primeiro elemento do array que passa numa função de teste

let itensPapelaria = [
    'Caneta',
    'Lápis',
    'Borracha',
    'Caderno'
];

// -> forEach();  

itensPapelaria.forEach((listaItensPapelaria) => {
  console.log(listaItensPapelaria);
});
console.log('\n\n-------------\n');

/* forEach substitutui o laço:
for (let index=0; index < eletrodomesticos.length; index++){
  console.log(eletrodomesticos[index]);
} */

// -> map();  faz um mapeamento dos objetos que tem dentro do array

 let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];

const precoProdutos = eletrodomesticos.map((item) => {
    return item.preco;
});

console.log(precoProdutos);
console.log('\n\n-------------\n');
 


// -> filter();  

// cria um novo array com os elementos que passam no teste
const comprarEletronicos = eletrodomesticos.filter(eletrodomestico => eletrodomestico.preco >= 1000);

console.log(comprarEletronicos);
console.log('\n\n-------------\n');



// -> reduce(); 

let reais = [27.86, 71.95, 36.5];
let somarValores = reais.reduce((total, valor) => {
    return total + valor;
});
console.log(somarValores);
console.log('\n\n-------------\n');


// ==> every();

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
]; */

const produtoBarato = 500;
const promocaoEletro = eletrodomesticos.every(eletronico => eletronico.preco >= produtoBarato); //retorna false

console.log(promocaoEletro);
console.log('\n\n-------------\n');


// ==> some() 

/* let eletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500 },
    { eletronico: 'Geladeira', preco: 2500 },
    { eletronico: 'Fogão', preco: 850 },
    { eletronico: 'Microondas', preco: 300 },
];*/

const produtoCaro = 1000;
const eletricoCaro = eletrodomesticos.some(eletronico => eletronico.preco >= produtoCaro); //verifica se tem ALGUM produto caro (maior de 1000), retorna true

console.log(eletricoCaro);
console.log('\n\n-------------\n');


// ==> find()  retorna o primeiro item que passa em algum teste (neste caso ele procura o primeiro elemento que for do setor cozinha)

let newArrayEletrodomesticos = [
    { eletronico: 'Televisão', preco: 1500, setor: 'Sala' },
    { eletronico: 'Geladeira', preco: 2500, setor: 'Cozinha' },
    { eletronico: 'Fogão', preco: 850, setor: 'Cozinha' },
    { eletronico: 'Microondas', preco: 300, setor: 'Cozinha' },
];
const produtosCozinha = newArrayEletrodomesticos.find(eletronico => eletronico.setor === 'Cozinha');
console.log(produtosCozinha);



// ==> findIndex()   retorna o index do primeiro elemento do array que passa numa função de teste
//verifica no array e retorna qual a primeira pessoa maior de idade

const idades = [3, 10, 18, 20, 18, 18, 18];
const maiorIdade = 18;

const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);

console.log(ehAdulto); 