// Escribir un script que muestre la posición de la primera vocal de un texto introducido por
// teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.

// Función para determinar si un carácter es una vocal
function esVocal(caracter) {
    return /["aeiou"]/i.test(caracter);
  }
  
  // Solicitar al usuario ingresar un texto por teclado
  var texto = prompt("Ingresa un texto:");
  
  // Buscar la posición de la primera vocal en el texto
  var posicion = -1;
  for (var i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
      posicion = i + 1; // Sumar 1 para que la posición sea legible (comenzando desde 1)
      break;
    }
  }
  
  // Mostrar el resultado
  if (posicion !== -1) {
    console.log("La primera vocal es: " + texto[posicion - 1] + " en la posicion Nº" + posicion);
  } else {
    console.log("No se encontro ninguna vocal en el texto.");
  }