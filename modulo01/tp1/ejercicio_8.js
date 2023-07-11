// Copiar el siguiente código dentro de un archivo “ejercicio_8.js” y ejecutar el programa en el navegador.

let val1, val2, num1, num2; //Declara variables locales
val1 = prompt("Introduce primer número ?", "0"); /* Solicita el ingreso de un valor numerico 
                                                    y almacena en la variable val1, declarada anteriormente */
num1 = parseInt(val1); /* Analiza la cadena ingresada, para determinar si contiene un valor entero
                          y la almacena en una nueva variable num1, declarada anteriormente */
val2 = prompt("Introduce segundo número ?", "0"); //Solicita el ingreso de un valor y almacena en una variable
num2 = parseInt(val2); //Analiza la cadena ingresada y la almacena en una nueva variable
let resultado = num1 + num2; /* Declara una nueva variable local, donde reserva el resultado de la operacion de 
                              la adicion de los valores ingresados anteriormente */

document.write(`<br/> <br/> La suma es ${resultado} ` ); 
/* Muestra el contenido de la variable resultado en el navegador.
Sugeriria agregar un mensaje alusivo a lo que realiza el codigo,
siendo que selecciona parte de los valores ingresados en este caso la parte entera,
Anunciando al usuario a partir de que se obtiene el resultado.
Ejemplo  */

document.write(`<br/> <br/> La suma de la parte entera de los valores ingresados es ${resultado} ` );

// El método parseInt analiza un valor como una cadena y devuelve el primer entero. https:
//www.w3schools.com/jsref/jsref_parseint.asp