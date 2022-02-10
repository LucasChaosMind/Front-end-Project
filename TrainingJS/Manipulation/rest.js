//igual o spread só que com função
function add(...num){
    console.log(num);
}
add(2,4,8,16,32);

let name = ['Mei','Misaki'];

function stringAdd(name, ...newName){
    aux = [
        ...newName,
        ...name,
    ];
    console.log(aux);
}
stringAdd(name,'Lolly','ChaosMind');