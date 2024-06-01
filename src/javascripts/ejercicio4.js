let nombreEmpleado = prompt("Cual es tu nombre");
let salarioPorHoras = prompt("Cuanto ganas en una hora?");
let cantidadDeHorasLaboradasM = prompt("Cuantas horas al mes laboraste");

let salarioBasicoM = salarioPorHoras * cantidadDeHorasLaboradasM ; 
let ValidacionDeSubsidioT = salarioBasicoM <= 700000;

console.log("Nombre del empleado: "+ nombreEmpleado);
console.log("Salario basico mensual " + salarioBasicoM);
console.log("Recibe subsidio: " + ValidacionDeSubsidioT);