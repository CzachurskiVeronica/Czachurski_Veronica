var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los "elementos de texto" es mayor en longitud
var elementosDeTexto = valores.filter(function (valor) {
  return typeof valor === "string";
});

var elementoMasLargo = elementosDeTexto.reduce(function (anterior, actual) {
  return anterior.length > actual.length ? anterior : actual;
});

console.log("El elemento de texto más largo es: " + elementoMasLargo);

// 2. Imprimir los elementos de menor a mayor cantidad de letras
var elementosOrdenados = elementosDeTexto.sort(function (a, b) {
  return a.length - b.length;
});

console.log("Los elementos de texto ordenados por longitud son:");
for (var i = 0; i < elementosOrdenados.length; i++) {
  console.log(elementosOrdenados[i]);
}

// 3. Realizar las operaciones matemáticas básicas con los dos elementos numéricos
var numeros = valores.filter(function (valor) {
  return typeof valor === "number";
});

var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
