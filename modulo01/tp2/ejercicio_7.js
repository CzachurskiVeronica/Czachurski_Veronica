// Escribir una función que reciba un texto y lo devuelva al revés.

let palabra = prompt("Ingrese una palabra: ");

let vuelta = reverso(palabra);
console.log(`La palabra ingresada es ${palabra} y, al reves resulta ${vuelta}.`);

function reverso(dato){
    if(dato == "string"){
        vuelta = texto.split('').reverse().join('');
        return vuelta;
    }else{
        alert("Debe ingresar una palabra");
        let palabra = prompt("Ingrese una palabra: ");
    }
}