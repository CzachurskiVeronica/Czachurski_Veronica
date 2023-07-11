/* Crear el archivo correspondiente a “ejercicio_7.js”, Ejecutarlo y luego agregar lineas de comentario
   explicando que hace el programa */

let dato, resultado; 
val1 = window.prompt("Introduce tu nombre: "); 
val2 = window.prompt("Introduce tu apellido: "); 
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; 
document.write(resultado);


/* 1- Declara dos variables dato y resultado, sin embargo la variable dato puede ser eliminada, ya que en el fragmento de codigo no se la utiliza.
   2- El programa utiliza la función window.prompt() para solicitar el ingreso de los valores solicitados.
        Muestra una ventana emergente y solicita el ingreso del dato, almacenando en val1
        Muestra una ventana emergente y solicita el ingreso del dato, almacenando en val2
   3- Crea una cadena de texto, empleando los valores ingresados. la cual se almacena en la variable resultado.
   4- Utiliza la función document.write() para mostrar el contenido de la variable resultado en el navegador. */