/* Escribir el código de una función a la que se pasa como parámetro un número entero y
    devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
    pantalla el resultado devuelto por la función.
    Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
    debe ser impar */

//Solicta el ingreso por teclado del valor por parte del usuario
let valor = prompt("Ingresar un numero para determinar si este es numero par o impar:");

//Declara una variable local y permite almacenar el valor resultante de la operacion invocando a la funcion
let resultado = determinarValor(valor);

//Muestra por consola el resultado obtenido
console.log(`El resultado del numero ${valor} ingresado es ${resultado}.`);

//Funcion para calcular lo solicitado por el ejercicio: determinar si un numero es par o impar
function determinarValor(valor){
    if(valor % 2 == 0) { //Calcula si el modulo del numero dividido 2 es igual a 0, refiere que el numero es par
        return "par";
    } else{
        return "impar";
    }
}