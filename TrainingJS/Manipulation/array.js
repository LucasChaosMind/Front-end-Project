let list = ['Açai','Pizza','Hamburguer','Pudim'];

// Transforme the array in one variable
let aux = list.toString();
alert('toString: '+aux);

//Transforme the array separete for the variable selected
let res = list.join(' ');
alert('Join: '+res);

// Search and return the possition in the array has have the value selected. if don't find return -1
alert('Position for Açai: '+list.indexOf('Açai'));

// Remove the final position of the arrray
list.pop(); //Final

// Remove the initial possition of the array
list.shift(); //First

// Add a new item in the array
list.push('Subway');
list.push('Sandwhich');
// No recomended
list[ list.length + 1 ] ='Atum';

// Remove a item of the array
list.splice(2,1) // X index . Y how many itens you want to delete. If Y is null, everything from the index will be deleted 

// Concat the arrays
let eletro = ['Ar-condicionado','Lava-Louças','Batedeira'];
let tecnologies = ['Tv','Notebook','Smartphone','Hi-fi bluetooch fone'];
//Need new variable for save the data values
let All = tecnologies.concat(eletro);
//See?
console.log('Tecnologies: '+tecnologies);
console.log('All: '+All);

// Ordenation in the array
eletro.sort(); // A - Z

// Reverse the array
tecnologies.reverse();

//Delete item in Arrays
let delt = ['Lucas','Helena','Lolly'];
console.log('No-Splice: '+delt);

delt.splice(2,1);
console.log('Splice: '+delt);

//Map for each value and execute the function x * 2
let varX = [32,16,8,4,2];
let vaxY = [];
varY = varX.map(
    function(item){
        return item * 2;
    }    
);
console.log('varY: '+varY);

//Execute a filter in the array and save values in varY
varY = varX.filter(
    function(item){
        if(item%3==0){
            return true;
        }else{
            return false;
        }
    }
);
console.log('Filter: '+varY);


//If all is true return true if one our more is false retunr false
let varS = varX.every(
    function(item){
        if(item > 20){
            return true;
        }else{
            return false;
        }
    }
);
console.log('Every: '+varS);

//Is someone is more big than 20 return true, if not return false 
varS = varX.some(
    function(item){
        if(item > 20){
            return true;
        }else{
            return false;
        }
    }
);
console.log('Some: '+varS);

//Resume the function ->
function simplefy(item){
    return(item > 20) ? true : false;
}

//Return the first item who sastify the condiction
varY = varX.find(
    function(item){
        return (item == 8) ? true : false;
    }
);
console.log('Find: '+varY);
varY = varX.findIndex(
    function(item){
        return (item == 8) ? true : false;
    }
);
console.log('FindIndex: '+varY);

let user =[
    { id:1, name:'Lucas', age: 21 },
    { id: 2, name:'Hellena', age: 24 },
    { id: 3, name:'Lolly', age: 18 }
];

let userIt = user.find(
    function(user){
        return ( user.id == 3 )? true : false;
    }
);
console.log('User It: '+userIt);

let convidados = ['Joana', 'Maria', 'Paulo', 'Ana'];

let podeEntrar = convidados.find((nome) => {
 return (nome == 'Weslley' ) ? true : false;
});
console.log("Pode entrar: "+podeEntrar);