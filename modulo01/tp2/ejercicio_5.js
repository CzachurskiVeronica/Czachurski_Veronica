/* Crear una función que muestre información sobre una cadena de texto que se le pasa como
   argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
   sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

let ingreso = prompt("Ingrese una cadena de texto: "); //Solicita el ingreso por teclado de la cadena de texto

console.log(determinarCadena(ingreso)); //Muestra por consola el resultado de la funcion

function determinarCadena(cadena) {
  let valor = /\d/.test(cadena); /*La expresion permite evluar si contiene un digito numerico
                                    retornando un valor booleano true o false */
  if (valor == true) { //En caso de que lo resultante de la evaluacion sea true, devuelve el siguiente mensaje
    return "No se puede evaluar. Usted debe ingresar una cadena de texto unicamente";
  } else if (valor != true) { //En caso de que lo resultante sea distinto de true, evalua cada una de las posibilidades
    if (cadena === cadena.toUpperCase()) {
      return "Mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
      return "Minúsculas";
    } else {
      return "Mezcla de mayúsculas y minúsculas";
    }
  }
}