let people ={
    name: 'Lucas',
    age: 21,
    sex: 'Masculino',
    social:{
        Linkedin: 'Lucas C. Bresolino',
        Instagram: 'ChaosMind.js',
        Github: 'CahosMind',
    },
    work : function(){
        return `Name: ${this.name}. Age: ${this.age} years old. Sexo: ${this.sex}`
    }
};

//age = 21 se não haver valor ele vai colocar 21 como valor padão
let {name, sex:sexo, age = 21} = people;

console.log('Name: '+name);
console.log('Age: '+age);
console.log('Sexo: '+sexo);

//Modo 1
let {Linkedin} = people.social

console.log('Linkedin: '+Linkedin);

//Modo 2
let {name:meuNome,age:idade, social:{Github}} = people

console.log(meuNome+' '+idade+' '+Github);
