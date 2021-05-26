// o que são arrays, como utilizar alguns métodos de array.

// what is arrays?
/*
  var nome_array = [item1, item2, item3];

  let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Notebook',
    'Ar-Condicionado'
  ];
*/

// métodos básicos de arrays & demonstração

/* 

pop() -> remove o último elemento de um array

push() -> adiciona um elemento ao array, sempre na última posição

shift() -> remove o primeiro do array e desloca todos os elementos para o índice inferior

unshift() -> adiciona um novo elemento no inicio de um array e remove elementos mais antigos 

join() -> une todos os elementos dentro do array

*/

let eletrodomesticos = [
    'Televisão',
    'Geladeira',
    'Fogão',
    'Microondas'
];

// -> pop();   -> remove o último elemento de um array

console.log('Sem o pop...:', eletrodomesticos);
console.log(eletrodomesticos.pop()); 
console.log('Com o pop...:', eletrodomesticos);

console.log('\n\n-------------\n');

// -> push();   -> adiciona um elemento ao array, sempre na última posição

console.log('Sem o push...:', eletrodomesticos);
console.log(eletrodomesticos.push('Cafeteira'));
console.log('Com o push...:', eletrodomesticos);

console.log('\n\n-------------\n');

// -> shift();  -> remove o primeiro do array e desloca todos os elementos para o índice inferior

console.log('Sem o shift...:', eletrodomesticos);
console.log(eletrodomesticos.shift());
console.log('Com o shift...:', eletrodomesticos);

console.log('\n\n-------------\n');

// -> unshift();  -> adiciona um novo elemento no inicio de um array e remove elementos mais antigos 

console.log('Sem o unshift...:', eletrodomesticos);
console.log(eletrodomesticos.unshift('Batedeira'));
console.log('Com o unshift...:', eletrodomesticos);

console.log('\n\n-------------\n');

