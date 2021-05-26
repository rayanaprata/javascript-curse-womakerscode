
// join();   -> une todos os elementos do array em uma string (concatenando os valores)
// slice();   -> divide uma parte do array em um novo array
// concat();   -> cria um novo array mesclando/concatenando arrays existentes
// propriedade length   -> fornece o tamanho do array ou da matriz
// indexOf()   -> procura o primeiro índice do elemento passado na funçao, iniciando da esquerda para a direita, se o elemento não é encontrado, ele retorna um determinado valor
// lastIndexOf()  -> retorna um índice da última ocorrência do valor específicado encontrado na string

let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Fogão',
    'Microondas'
];

// -> join(); une os elementos do array

console.log('Sem o join...:', eletrodomesticos);
console.log('Com o join...:', eletrodomesticos.join(' - '));
console.log('\n\n-------------\n');


// -> slice(); remove o primeiro item do array

console.log('Sem o slice...:', eletrodomesticos);
console.log('Com o slice...:', eletrodomesticos.slice(1));
console.log('\n\n-------------\n');

// -> concat(); 

let array_1 = [1, 2, 3, 4, 5];
let array_2 = [6, 7, 8, 9, 10];

let conjuntoNumeros = array_1.concat(array_2);

console.log('Concat...:', conjuntoNumeros);
console.log('\n\n-------------\n');

// -> length   ->informa a quantidade de itens que tem m um array

console.log(eletrodomesticos);
console.log('Quantidade de itens: ', eletrodomesticos.length);
console.log('\n\n-------------\n');

// -> indexOf();

let item = 'Fogão'

let posicaoEletrodomestico = eletrodomesticos.indexOf(item);
console.log('O item ', item, ' está na posição: ', posicaoEletrodomestico);
console.log('\n\n-------------\n');

// -> lastIndexOf();

//inserindo um item duplicado:
eletrodomesticos.push('Televisão');

let posicaoEletroLastIndexOf = eletrodomesticos.lastIndexOf('Televisão');
console.log('A última ocorrência de Televisão dentro do array está na posição: ', posicaoEletroLastIndexOf);
console.log('\n\n-------------\n');