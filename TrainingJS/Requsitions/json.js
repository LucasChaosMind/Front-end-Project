let pessoa = {
    nome:'Lucas',
    idade: 17,
    cursos: ['ADS','HTML','Js']
};
let funcionario = {
    cargo: 'Dev',
    ...pessoa
}; 
console.log(funcionario);

//Cria JSON apartir de String uma vez que a requsição de um servidor vem em string
let universidade = JSON.parse('{"nome": "UTFPR", "nota": 5}');
console.log(universidade);


//Transforma um JSON em String
let stringJSON = JSON.stringify(funcionario);
console.log(stringJSON);
