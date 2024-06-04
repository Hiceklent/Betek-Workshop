const salarioDeUsuario = document.getElementById("salario");
const tiempoLaborado = document.getElementById("tiempoLaborado");
const respuestaDivEJ1 = document.getElementById("Respuesta1");
const respuestaDivEJ1_2 = document.getElementById("Respuesta2");
const respuestaDivEJ1_3 = document.getElementById("Respuesta3");


function actualizarResultadosEJA() {
  const num1 = parseFloat(salarioDeUsuario.value);
  const num2 = parseFloat(tiempoLaborado.value);

  if (isNaN(num1) || isNaN(num2)) {
    respuestaDivEJ1.innerText = "";
    respuestaDivEJ1_2.innerText = "";
    respuestaDivEJ1_3.innerText = "";
  } else {
    const r1 = num1 < 2000 && num2 >= 10;
    const r2 = num1 < 2000 && num2 < 10;
    const r3 = num1 >= 2000;

    respuestaDivEJ1.innerText = r1 ? "True" : "False";
    respuestaDivEJ1_2.innerText = r2 ? "True" : "False";
    respuestaDivEJ1_3.innerText = r3 ? "True" : "False";

    console.log(
      `¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años? ${r1}`
    );
    console.log(
      `¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años ${r2}`
    );
    console.log(`¿El sueldo es mayor o igual a $2000 US? ${r3}`);
  }


  }

salarioDeUsuario.addEventListener("input", actualizarResultadosEJA);
tiempoLaborado.addEventListener("input", actualizarResultadosEJA);
actualizarResultadosEJA();
