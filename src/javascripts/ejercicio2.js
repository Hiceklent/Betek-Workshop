document.addEventListener('DOMContentLoaded', () => {

    const valorDeCompraInput = document.getElementById("valorDeCompra");
const descuentoValidator = document.getElementById("RespuestaEJB");
const validadorDeDescuentosP = document.getElementById("validadorDeDescuentosP")

function actualizarResultadosEJA() {
  const numValorDeCompra = parseFloat(valorDeCompra.value) || 0;


  if (numValorDeCompra >= 100000) {
    descuentoValidator.innerText = "SI!";
    descuentoValidator.style.backgroundColor = "var(--color-positivo)";
    descuentoValidator.style.color = "var(--color-base)"
    validadorDeDescuentosP.innerText = " 🔥 TIENES DISPONIBLE UN DESCUENTO DEL 50% 🔥"
    console.log(`Tu compra tiene descuento True`);
   
  } else if (numValorDeCompra == 0){

    descuentoValidator.innerText = "";
    descuentoValidator.style.backgroundColor = "var(--color-base)";
    validadorDeDescuentosP.innerText = "Digita el valor de tu compra para saber si tienes Descuentos";

   
  } else {
    descuentoValidator.innerText = "NO!"
    descuentoValidator.style.backgroundColor = "var(--color-negativo)";
    console.log(`Tu compra tiene descuento False`);
    validadorDeDescuentosP.innerText = "No tienes descuentos disposibles 😔"


  }
}

valorDeCompraInput.addEventListener("input", actualizarResultadosEJA);

actualizarResultadosEJA();

});


