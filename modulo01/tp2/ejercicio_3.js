/* El factorial de un número entero positivo se define como el producto de todos los números
   naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x 1.
   Por ejemplo: el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
   Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero. */

//Solicita el ingreso por teclado de un numero al usuario
let numero = prompt("Ingrese un numero para calcular su factorial"); 

//Crea una funcion para comenzar a evaluar las diferentes posibilidades
function calcularFactorial(numero) {
    if (numero < 0) {
      return "El número debe ser un entero positivo."; //Muestra el siguiente mensaje en el retorno
    } else if (numero === 0) { //Si el numero ingresado es igual a 0, retorna el valor 1
      return 1; 
    } else {          //En caso de que el numero sea mayor a 1, reserva en la variable posicion el valor ingresado
      let factorial = 1;  //Calcula en cada una de las posiciones el valor del factorial
      for (let posicion = numero; posicion >= 1; posicion--) {
        factorial *= posicion;
      }
      return factorial; //Permite retornar el valor en cada una de las opciones
    }
  }

let factorial = calcularFactorial(numero); //Declara una variable local y reserva el resultado de la funcion en la misma

//Permite mostrar por pantalla el resultado de cada una de las evaluaciones, en cada caso particular
console.log(`El factorial del numero ${numero} es: ${factorial}`);