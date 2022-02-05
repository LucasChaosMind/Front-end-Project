let day = new Date();

console.log(day.toDateString());

let birthday = new Date(2000, 04, 21 , 2, 15 , 5);
console.log(birthday);

let newyear = new Date('2022-01-01 00:00:01');
console.log(newyear);



let d = new Date();

let newVar = d.getFullYear();
console.log(newVar);

newVar = d.getMonth();
console.log(newVar);

newVar = d.getDate();
console.log(newVar);

newVar = d.getHours();
console.log(newVar);

newVar = d.getMinutes();
console.log(newVar);

newVar = d.getSeconds();
console.log(newVar);

//timestamp
newVar = d.getTime();
console.log(newVar);

// Set date
d.setFullYear(2000,04,21);
console.log('setFullYear: '+d);

d.setMonth(4,21);
console.log('setMonth: '+d);

d.setDate(d.getDate() + 5);
console.log('setDate: '+d);

d.setHours(d.getHours + 24);
console.log('setHours: '+d);
