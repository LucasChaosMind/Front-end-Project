let people ={
    name: 'Lucas',
    age: 21,
    sex: 'Masculino',
    social:{
        Linkdin: 'Lucas C. Bresolino',
        Instagram: 'ChaosMind.js',
        Github: 'CahosMind',
    },
    work : function(){
        return `Name: ${this.name}. Age: ${this.age} years old. Sexo: ${this.sex}`
    }
};

let {name, sex:sexo, age} = people;

console.log('Name: '+name);
console.log('Age: '+age);
console.log('Sexo: '+sexo);
