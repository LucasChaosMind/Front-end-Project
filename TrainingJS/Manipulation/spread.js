let varX = [2,4,8,16,32];

let varY = [...varX,3,9,27];

alert(varY.sort());

// ADD a value at the object
let varObj ={
    name: 'Misaki Mei',
    age: 21,
}; 
let Obj ={
    ...varObj,
    city: 'Thais',
    Level: 49,
};
console.log(Obj);
