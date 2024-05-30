let valor = prompt("¿Cuanto es tu valor?");
let edad = prompt("¿Cuanto años has trabajado?");

let r1 = valor < 2000 && edad >= 10;
let r2 = valor < 2000 && edad < 10;
let r3 = valor >= 2000;

console.log(r1); 
console.log(r2);
console.log(r3);