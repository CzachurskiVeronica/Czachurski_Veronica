// Copiar el siguiente código dentro de un archivo “ejercicio_8.js” y ejecutar el programa en el navegador.

let val1, val2, num1, num2; //Declara variables locales
val1 = prompt("Introduce primer número ?", "0"); //Solicita el ingreso de un valor y almacena en una variable
num1 = parseInt(val1); //Analiza la cadena ingresada y la almacena en una nueva variable
val2 = prompt("Introduce segundo número ?", "0"); //Solicita el ingreso de un valor y almacena en una variable
num2 = parseInt(val2); //Analiza la cadena ingresada y la almacena en una nueva variable
let resultado = num1 + num2; //Declara una nueva variable local, donde reserva el resultado de la operacion
document.write(`<br/> <br/> La suma es ${resultado} ` ); //Muestra el contenido de la variable resultado en el navegador.

// El método parseInt analiza un valor como una cadena y devuelve el primer entero. https:
//www.w3schools.com/jsref/jsref_parseint.asp