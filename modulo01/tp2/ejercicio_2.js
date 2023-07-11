/* Completar las condiciones de los IF del siguiente script para que los mensajes se muestren siempre
   de forma correcta: */

var num1 = 3; //Declara una variable local e inicializa con el valor adjudicado
var num2 = 7; //Declara una variable local e inicializa con el valor adjudicado

//Evalua cada una de las posibilidades
if (num1 < num2) {  //Si el primer valor ingresado es menor al segundo
    console.log("num1 no es mayor que num2");
} 
if (num2 > 0) { //Si el segundo valor ingresado es mayor a 0
    console.log("num2 es positivo");
}
if (num1 < 0) { //Si el primer valor ingresado es menor a 0
    console.log("num1 es negativo o distinto de cero");
}
if (num1 + 1 != num2) { //Si el primer valor + 1 es distinto del segundo valor
    console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}