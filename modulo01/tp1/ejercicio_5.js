/* Copiar el siguiente código dentro de un archivo, luego guardarlo con el nombre: “ejercicio_5.js”. 
   Sin embargo, dicho código tiene un error, para corregirlo se debe depurar el código en el navegador. */

let a, b;       //Declara variables locales
a = 3; b = 7;   //Asigna valores a dichas variables
resultado = a * b; //Realiza una operación aritmética y reserva en la variable resultado
document.write(`Variable a contiene ${a} <br> ` ); //Imprime el valor de la primera variable
document.write(`Variable b contiene ${b} <br> ` ); //Imprime el valor de la segunda variable
document.write(`El producto de a por b es ${resultado} <br> `); /*Imprime el resultado de calcular la operación
                                    La misma no mostraba por pantalla el mensaje, ya que estaba 
                                    invocando a otra variable diferente de la que contiene el resultado de
                                    la operacion */
document.write("Los puntos de interrupcion son fundamentales para programar");