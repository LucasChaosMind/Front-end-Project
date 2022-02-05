let newVar = Math.PI;
console.log('PI: '+newVar);

//Aredonda o valor
newVar = Math.round(7.75);
console.log('Round: '+newVar);

//Aredonda para baixo
newVar = Math.floor(7.75);
console.log('Floor: '+newVar);

//Aredonda para cima
newVar = Math.ceil(7.75);
console.log('Ceil: '+newVar);

//Valor absoluto Positivo
newVar = Math.abs(-75);
console.log('ABS: '+newVar);

//return low value
newVar = Math.min(7,3,20,40);
console.log('Min: '+newVar);

//return the max value
newVar = Math.max(7,3,20,40);
console.log('Max: '+newVar);

//returna valor aleatorio dentro do limite imposto
newVar = Math.floor(Math.random() * 100 + 1);
console.log('Random: '+newVar);
