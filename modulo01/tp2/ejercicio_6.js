/* Escribir un script que muestre la posición de la primera vocal de un texto introducido por
   teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1. */

// Función para determinar si un carácter es una vocal, adjudicando el valor 
function vocal(caracter) {
  return /["aeiou"]/i.test(caracter);
}

// Solicita al usuario ingresar un texto por teclado
var texto = prompt("Ingresa un texto:");

// Busca la posición de la primera vocal en el texto
var posicion = -1;

//Funcion que recorre el texto ingresado por el usuario
for (var escrito = 0; escrito < texto.length; escrito++) { //Evalua que la longitud sea menor al valor inicializado
  if (vocal(texto[escrito])) { //Mediante la invocacion a la funcion anterior, la invoca para determinar la existencia de una vocal
    posicion = escrito + 1; // Suma 1 para que la posición sea legible (comenzando desde 1)
    break;
  }
}

// Muestra el resultado
if (posicion !== -1) {
  console.log("La primera vocal es: " + texto[posicion - 1] + " en la posicion Nº" + posicion);
} else {
  console.log("No se encontro ninguna vocal en el texto.");
}