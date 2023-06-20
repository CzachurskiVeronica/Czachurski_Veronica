// El factorial de un número entero positivo se define como el producto de todos los números
// naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x
// 1.
// Por ejemplo: el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero.

let numero = prompt("Ingrese un numero para calcular su factorial");

function calcularFactorial(numero) {
    if (numero < 0) {
      return "El número debe ser un entero positivo.";
    } else if (numero === 0) {
      return 1;
    } else {
      let factorial = 1;
      for (let posicion = numero; posicion >= 1; posicion--) {
        factorial *= posicion;
      }
      return factorial;
    }
  }

let factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);