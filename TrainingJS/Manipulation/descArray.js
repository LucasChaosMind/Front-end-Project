let people = ['Hellen', 'Oliveira','Hellen Oliveira' ,'@Olivia.Js'];

let [name, lastName, fullName, instagram] = people;

console.log(`Name: ${name}. Last Name: ${lastName}. Full Name: ${fullName}. Instagram: ${instagram}`);

let op = ['On', 'Off', 'StandBye'];

//Deixa espaço vazio para não pegar algum valor, pq ele funciona em ordem de inserção no array
let [on, , stand] = op;

console.log(`Now? ${on} Maybe?: ${stand}`);

