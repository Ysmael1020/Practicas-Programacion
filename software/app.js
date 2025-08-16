let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let operacion = prompt("Ingrese la operación aritmetico (+, -, *, /):");

console.log(num1);
console.log(num2);
console.log(operacion);

num1 = parseFloat(num1);
if (isNaN(num1)) {
  console.error("Error: Debe ingresar solo números.");
}

num2 = parseFloat(num2);
if (isNaN(num2)) {
  console.error("Error: Debe ingresar solo números.");
}

alert("Los números ingresados son: " + num1 + " y " + num2);


let resultado;
if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  resultado = num1 / num2;
} else {
  console.log(resultado);
  console.error("Operación no válida");
}
console.log("El resultado de la operación es: " + resultado);

alert("El resultado de la operación es: " + resultado);
document.write("El resultado de la operación es: " + resultado);

let boton = document.getElementById("cambiarFondoBtn");
let titulo = document.getElementById("tituloPrincipal");

function cambiarColor() {
    document.body.style.backgroundColor = "black"; 
    document.body.style.color = "white"; 
    titulo.textContent = "Modo oscuro activado";
}
boton.addEventListener("click", cambiarColor);  