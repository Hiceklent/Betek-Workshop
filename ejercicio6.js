let numeroDePasaporte = prompt("Ingrese el primer digito de su pasaporte!").toLowerCase();

let formula = numeroDePasaporte === "a" ? "Toma la primera salida a la izquierda para vuelos nacionales" : "Toma la primera salida a la derecha para vuelos internacionales";
let formula2 = numeroDePasaporte === "a";

console.log("Usuario Nacional: " + formula2)
console.log("Usuario Extanjero: " + !formula2)
console.log(formula);