let nome = 'Lucas C. Bresolino';
document.getElementById('a1').innerHTML = 'Tamanho: ' + nome.length + '. String: ' + nome;
//Busca o Index de inicio da sigua/string buscada. Caso n exista ela ira retornar -1
document.getElementById('a2').innerHTML = 'Buscndo na String o index com a sigla "as": ' + nome.indexOf('as');
//Pega a string do index x até o index y
document.getElementById('a3').innerHTML = 'Da pocição 0 a 10: ' + nome.slice(0, 10);
// Igual ao de cima só que com opção de pegar apartir do fim da string
document.getElementById('a4').innerHTML = 'Da pocição 1 a 4: ' + nome.substring(1, 4);
//Pega aparitit do index x e na parte y vc coloca quantas letras vc quer q ele mostre
document.getElementById('a5').innerHTML = 'Da pocição -9 e pegando 9 caracteres: ' + nome.substr(-9, 9);

//Mostra string trocada por outra string. Nãosubstitui o valor na string
document.getElementById('a6').innerHTML = 'String: ' + nome.replace('C. Bresolino', 'Chaos Mind');

//Para subtituir tem que fazer isso
nome = nome.replace('C. Bresolino', 'Chaos Mind');
alert(nome);
document.getElementById('a7').innerHTML = 'Uppercase: ' + nome.toUpperCase();
//retirar espaços em excesso da string
let aux = 'Chaos    Mind';
document.getElementById('a8').innerHTML = 'Sem espaços: ' + aux.trim();
//pegando o no index 3
document.getElementById('a9').innerHTML = nome[3];

//Divide a string original em um array com base na string informada
let rest = nome.split(' ');
alert('Array: ' + rest);

//String padStart and padEnd