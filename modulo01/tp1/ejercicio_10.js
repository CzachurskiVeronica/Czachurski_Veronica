/* Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
   meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
   le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo. */

//Declara un arreglo con los meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
            "Octubre", "Noviembre", "Diciembre"];

//Declara una variable y almacena el valor ingresado por el usuario
let ingreso = parseInt(prompt("Ingrese un numero del 1 al 12: "));

//Evalua si el ingreso se encuentra entre los parametros establecidos para realizar las operaciones correspondientes
if(ingreso >= 1 && ingreso <= 12){
        document.write("El mes correspondiente es: " + meses[ingreso - 1]);
} else{
        alert("Valor ingresado incorrecto."); //Al no ser correcto el valor ingresado, comunica al usuario
        ingreso = parseInt(prompt("Ingrese un valor correcto del 1-12: ")); //Solicita nuevamente el ingreso 
                                                                        //Mientras se halle en los parametros establecidos imprime el valor correspondiente.
       
        while(ingreso >= 1 && ingreso <= 12){
                document.write("El mes correspondiente es: " + meses[ingreso - 1]);
                break;
        }
}