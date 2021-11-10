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
list.splice(2,1) // X index . Y how many you want to delete. If Y is null, everything from the index will be deleted 

// Concat the arrays
let eletro = ['Ar-condicionado','Lava-Louças','Batedeira'];
let tecnologies = ['Tv','Notebook','Smartphone','Hi-fi bluetooch fone'];
tecnologies.concat(eletro);

// Ordenation in the array
eletro.sort(); // A - Z

// Reverse the array
tecnologies.reverse(); 
