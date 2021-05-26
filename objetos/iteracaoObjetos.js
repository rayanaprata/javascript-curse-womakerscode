funcionario = {
    nome: 'Rayana',
    sobrenome: 'Neves',
    profissao: 'Técnica de Suporte',
    idade: 20,
    empresa: 'T-Systems do Brasil',
    ativa: true
};

// ==> For... in

for (let listarFuncionario in funcionario) {
    console.log(funcionario[listarFuncionario]);
}


// ==> If... in

if ('profissao' in funcionario) {
    console.log('\nA key profissão existe no objeto Funcionario');
}