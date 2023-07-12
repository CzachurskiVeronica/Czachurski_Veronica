/* Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días. */

//Solicita al usuario el ingreso por teclado de un numero para determinar la cantidad de dias de dicho mes
var ingreso = parseInt(prompt("Ingrese un numero de mes: "));

//Sentencia que permite evaluar cada caso en particular
switch(ingreso){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    console.log("El mes tiene 31 días"); // Enero, marzo, mayo, julio, agosto, octubre y diciembre tienen 31 días
    break;
    case 2:
    console.log("El mes tiene 28 o 29 días"); // Febrero tiene 28 o 29 días en años bisiestos
    break;
    case 4:
    case 6:
    case 9:
    case 11:
    console.log("El mes tiene 30 días"); // Abril, junio, septiembre y noviembre tienen 30 días
    break;
    default:
    console.log("Número de mes inválido"); // Si se ingresa un número de mes inválido
    break;
}