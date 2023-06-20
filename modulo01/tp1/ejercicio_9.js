// Crear el archivo “ejercicio_9.js”. Declarar un array llamado “vocales” con las 5 letras. Luego se
// deben imprimir en el navegador uno debajo de otro.

var vocales = ['a', 'e', 'i', 'o', 'u']; //Declara un array y el contenido del mismo

//Estructura de control que permite recorrer cada posicion del arreglo e imprimirlo con un salto de linea

for(let posicion = 0; posicion < vocales.length; posicion++){
    document.write(vocales[posicion] + "</br>");
}
