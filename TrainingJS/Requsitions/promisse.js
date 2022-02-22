function temperatureIndice() {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve('40 na sombra');
        }, 2000);
    });
}

let temp = temperatureIndice();

temp.then(function (resultado) {
    console.log('Temperatura: ' + resultado)
});
temp.catch(function () {
    console.log('Error!')
});
console.log(temp);

//Criando Promise

let myPromise = new Promise(() => {
    let name = 'ChaosMind';

    if (nome == 'ChaosMind') {
        resolve('OK!');
    } else {
        reject('Error');
    }
});
myPromise.then((data) => {
    console.log(data);
});

// Encadeamento de then's

let MyPromise = new Promise(() => {
    let name = 'ChaosMind';

    if (nome == 'ChaosMind') {
        resolve('OK!');
    } else {
        reject('Error');
    }
});

MyPromise.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log('\nError: ' + e);
})

//Resolver varias promesssas

proA = new Promise((resolve,reject) =>{
    resolve('Promise 1 Ok');
});
proB = new Promise((resolve,reject) =>{
    resolve('Promise 2 Ok');
});

//Assoncrina ->
let resolveAll = Promise.all([proA, proB]).then((data) =>{
    console.log('Work! '+data);
})