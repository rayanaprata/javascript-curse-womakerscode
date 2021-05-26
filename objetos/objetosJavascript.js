// o que são objetos: representação do mundo real na programação

// o que são objetos: representação do mundo real na programação

// podem ser utilizadas duas formas para se obter uma propriedade de um objeto:

// Notação dot (ponto)         ->  pessoa.sobrenome;     -> melhor prática
// Notaçã bracket (colchete)   ->  pessoa["sobrenome"];


// ==> Objetos

/* let pessoa = {
    nome: 'Rayana',
    sobrenome: 'Neves',
    idade: 20,
    profissao: 'Técnica de Suporte',
    empresa: 'T-Systems do Brasil'
};

console.log(pessoa); */


// Brackets (Colchetes) vs Dot (ponto) notation

let pessoa = {
    nome: 'Rayana',
    sobrenome: 'Neves',
    idade: 20,
    profissao: 'Técnica de Suporte',
    empresa: 'T-Systems do Brasil'
};

//let listarProfissao = pessoa.profissao;
let listarProfissao = pessoa['profissao'];
let idadeFuncionario = pessoa.idade;

console.log(listarProfissao);
console.log(idadeFuncionario);