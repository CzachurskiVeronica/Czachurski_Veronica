/* Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write(). */

function generarNumeros() { //funcion para generar numeros aleatorios
  var numeros = new Set();

  while (numeros.size < 100) { //Genera numeros hasta 100
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.add(numeroAleatorio); //Verifica si los numeros creados no se repiten y permite ir cargandolos
  }

  numeros.forEach(function(numero) {
    document.write(numero + "|" + ' ');
  });
}

generarNumeros(); //Invoca la funcion