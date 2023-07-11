/* Crear el archivo “ejercicio_9.js”. Declarar un array llamado “vocales” con las 5 letras. Luego se
   deben imprimir en el navegador uno debajo de otro. */

var vocales = ['a', 'e', 'i', 'o', 'u']; //Declara un array y el contenido del mismo

/* Estructura de control que permite recorrer cada posicion del arreglo y su contenido
e imprimirlo con un salto de linea en cada una de las lineas a medida que avanza en el array */

for(let vocal of vocales){
    document.write(vocal + "</br>");
}
