function temperatureIndice(){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}

let temp = temperatureIndice();

temp.then(function(resultado){
    console.log('Temperatura: '+resultado)
});
temp.catch(function(){
    console.log('Error!')
});
console.log(temp);
