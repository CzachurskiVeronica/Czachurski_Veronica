/* Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente” */

function calcularPromedio(notas) {
  var suma = 0;
  for (var i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  var promedio = suma / notas.length;
  return promedio;
}

function evaluarPromedio(promedio) {
  if (promedio <= 5) {
    return "Reprobado";
  } else if (promedio >= 6 && promedio <= 8) {
    return "Aprobado";
  } else if (promedio >= 8) {
    return "Sobresaliente";
  }
}

var notas = [];
var cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas: "));

for (var i = 0; i < cantidadNotas; i++) {
  var nota = parseInt(prompt("Ingrese la nota: "));
  if (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("La nota debe ser un número natural entre 0 y 10.");
    break;
  }
  notas.push(nota);
}

var promedio = calcularPromedio(notas);
var resultado = evaluarPromedio(promedio);

console.log("El promedio es: " + promedio);
console.log("Resultado: " + resultado);
